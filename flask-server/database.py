import psycopg2

class Database():
    def __init__(self, info={}): # take args later
        self.DB_NAME = info["name"]
        self.DB_USER = info["user"]
        self.DB_PASS = info["pass"]
        self.DB_HOST = info["host"]
        self.DB_PORT = info["port"]

        self.conn = psycopg2.connect(
            database = self.DB_NAME,
            user     = self.DB_USER,
            password = self.DB_PASS,
            host     = self.DB_HOST,
            port     = self.DB_PORT
            )

        self.cur = self.conn.cursor()
    
    def query(self, sql, n=10):
        if (n == 0): return None
        try:
            self.cur.execute(sql)
            result = self.cur.fetchall()
            return result
        except:
            print(f"Query Failed (n={n}): {sql}")
