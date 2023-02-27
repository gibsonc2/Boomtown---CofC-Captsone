from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

@app.route("/signin", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        commPrefs = getCommPrefs(request.form.get('prefEmail'), request.form.get('prefText'), request.form.get('prefNone'))
        add_to_db(
            boomtown, 
            request.form.get("fname"), 
            request.form.get("lname"), 
            request.form.get("email"), 
            request.form.get("phone"), 
            commPrefs
        )
    return redirect("http://localhost:3000")

def connect_to_db():
    boomtown = mysql.connector.connect(
        host="database-1.cluster-cwnezg0iyvk9.us-east-1.rds.amazonaws.com",
        user="admin",
        password="boomtown",
        database="BoomTown"
    )
    return boomtown
    
def add_to_db(db, fname, lname, email, phone, commPref):
    c = db.cursor()
    c.execute(f"INSERT INTO Guest (guestFName, guestLName, guestEmail, guestPhone, guestCommPref) VALUES ('{fname}', '{lname}', '{email}', '{phone}', {commPref})")
    db.commit()
    
def getCommPrefs(einput, tinput, ninput):
    if ninput == 'on':
        return 0 # do not contact
    elif einput == 'on' and tinput is None:
        return 1 # contact by email only
    elif einput is None and tinput == 'on':
        return 2 # contact by text only
    else:
        return 3 # contact by text or email
      
boomtown = connect_to_db()
