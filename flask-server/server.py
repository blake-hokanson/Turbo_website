import json

from database import Database
from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #website url
#CORS(app)

# Gets names of all databases
@app.route("/get_schemata/<int:datanum>", methods=['GET']) 
def get_schemata(datanum):
    database = getDatabase(datanum)
    qSelect = """
    SELECT schema_name
    FROM information_schema.schemata
    WHERE schema_name LIKE 'science_turbo_master_pipeline%'
    ORDER By schema_name;
    """

    result = database.query(qSelect)
    if (result == None): return []
    return result

#gets data from page
@app.route("/get_page/<int:datanum>/<int:page>")
def get_page(datanum, page):
    database = getDatabase(datanum)
    pages = get_schemata(datanum)

    if (page >= len(pages)):
        print(f"\n\n\nERROR in get_page ({ page} >= {len(pages)})\n\n\n")
        return []
    if (len(pages) == 0):
        print(f"\n\n\nERROR in get_page (len(pages) == 0)\n\n\n")
        return []

    (cur_page,) = pages[page]

    qSelect = f"""
    SELECT *
    FROM {cur_page}.image_status;
    """
    result = database.query(qSelect)
    if (result == None): return []
    return result

#gets data from all pages
@app.route("/all_pages/<int:datanum>")
def all_pages(datanum):
    database = getDatabase(datanum)
    pages = get_schemata(datanum)
    result = []
    for page in pages:
        qSelect = f"""
        SELECT *
        FROM {page[0]}.image_status;
        """
        q = database.query(qSelect)
        if (q == None): continue
        for i in q:
            result.append(i)
    return result

@app.route("/database_names")
def database_names():
    return [info["name"] for info in databaseLogin]

def readDatabaseFile(path="databases.json"):
    with open(path, 'r') as file: #figure out path
        data = json.load(file)
    return data

def getDatabase(n):
    return databaseObjects[n]

databaseLogin = readDatabaseFile()
databaseObjects = [Database(info) for info in databaseLogin]


if (__name__ == "__main__"):
    app.run(debug=True, port=5001, threaded=False)
# threaded must be false or the Database object will mix up values
# skyportal runs on port 5000, so I changed the default
