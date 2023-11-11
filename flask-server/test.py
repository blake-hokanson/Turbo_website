from database import Database

import json

info = {
    "name": "production",
    "user": "plkelly",
    "pass": "TURBOTURBO",
    "host": "127.0.0.1",
    "port": "5432",
}

database = Database(info)
print(database.query("SELECT * FROM information_schema.schemata;"))
