from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from backend.settings import db
from gridfs import GridFS # type: ignore
from .serializers import FileUploadSerializer

# Create your views here.
fs = GridFS(db)

class FileView(APIView):
    def post(self, request):
        serializer = FileUploadSerializer(data=request.data)

        if serializer.is_valid():
            files = request.FILES.getlist('files')

            files_ids = []

            for file in files:
                file_id = fs.put(file, filename=file.name)

                files_ids.append(file_id)

            document = {
                'file_ids' : files_ids
            }

            result = db.files.insert_one(document)

            return Response({"message": "Successful added the images", "document_id": str(result.inserted_id), "file_ids": files_ids}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)