import csv

with open("topic-docs.csv","rb") as docs:
    reader = csv.DictReader(docs)
    for row in reader: