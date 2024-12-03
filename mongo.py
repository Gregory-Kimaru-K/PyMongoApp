from pymongo import MongoClient # type: ignore
import pprint
from bson.objectid import ObjectId # type: ignore

client = MongoClient("localhost", 27017)

db = client.bookstore

books = db.books

for book in books.find({'genres': "Fiction"}):
    pprint.pprint(book)