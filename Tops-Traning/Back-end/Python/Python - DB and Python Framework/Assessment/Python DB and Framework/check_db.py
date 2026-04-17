import MySQLdb
try:
    db = MySQLdb.connect(user='root', password='', host='127.0.0.1')
    cursor = db.cursor()
    cursor.execute('CREATE DATABASE IF NOT EXISTS writesphere_db;')
    print("Database ensured.")
    db.close()
except Exception as e:
    print(f"Error: {e}")
