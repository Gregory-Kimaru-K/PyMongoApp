from django.shortcuts import render
from pymongo import MongoClient # type: ignore
from backend.settings import db
from gridfs import GridFS # type: ignore 

# Create your views here.
fs = GridFS(db)