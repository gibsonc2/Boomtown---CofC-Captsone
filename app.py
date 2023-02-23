from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        #print(request.form)
        #print(request.form.get("name"))
        #add_to_db(boomtown, request.form.get("name"), request.form.get("email"), request.form.get("phone"))
        return render_template("SignIn.html")
    return render_template("SignIn.html")

def connect_to_db():
    boomtown = mysql.connector.connect(
        host="database-1.cluster-cwnezg0iyvk9.us-east-1.rds.amazonaws.com",
        user="admin",
        password="boomtown",
        database="BoomTown"
    )
    return boomtown
    
def add_to_db(db, name, email, phone):
    c = db.cursor()
    c.execute(f"INSERT INTO Guest (guestFName, guestEmail, guestPhone) VALUES ('{name}', '{email}', '{phone}')")
    db.commit()
      
boomtown = connect_to_db()
    