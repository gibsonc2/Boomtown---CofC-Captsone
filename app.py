from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        add_to_db(boomtown, request.form.get("fname"), request.form.get("lname"), request.form.get("email"), request.form.get("phone"))
    return render_template("SignIn.html")

def connect_to_db():
    boomtown = mysql.connector.connect(
        host="database-1.cluster-cwnezg0iyvk9.us-east-1.rds.amazonaws.com",
        user="admin",
        password="boomtown",
        database="BoomTown"
    )
    return boomtown
    
def add_to_db(db, fname, lname, email, phone):
    c = db.cursor()
    c.execute(f"INSERT INTO Guest (guestFName, guestLName, guestEmail, guestPhone) VALUES ('{fname}', '{lname}', '{email}', '{phone}')")
    db.commit()
      
boomtown = connect_to_db()
