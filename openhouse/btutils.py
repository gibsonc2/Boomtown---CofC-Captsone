import mysql.connector

def connect_to_db():  #
    db = mysql.connector.connect(
        host="database-1.cluster-cwnezg0iyvk9.us-east-1.rds.amazonaws.com",
        user="admin",
        password="boomtown",
        database="BoomTown"
    )
    return db

def add_to_db(db, fname, lname, email, phone, commPref):
    c = db.cursor()
    c.execute(f"INSERT INTO Guest (guestFName, guestLName, guestEmail, guestPhone, guestCommPref) VALUES ('{fname}', '{lname}', '{email}', '{phone}', {commPref})")
    db.commit()
