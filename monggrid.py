from pymongo import MongoClient #type: ignore
import pprint
from bson.objectid import ObjectId #type: ignore
import gridfs #type: ignore

db = MongoClient().gridTrial
fs = gridfs.GridFS(db)

a = fs.put(b"Hello World")

print(fs.get(a).read())