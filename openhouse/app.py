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

@app.route("/adminPortal", methods=["GET", "POST"])
def adminPortal():
    db = connect_to_db()  # establish database connection
    c = db.cursor()  # create cursor for interacting with db
    # query db
    c.execute("SELECT agentFName, agentLName, agentPhone, agentEmail, logoPath, agentImgPath FROM Agent")
    items = c.fetchall()  # get every item from query in tuple
    # return items to react server
    # items[0] is the entire tuple retrieved from query, so we need to index further into that
    return {
        "fname":items[0][0], 
        "lname":items[0][1],
        "phone":items[0][2], 
        "email":items[0][3],
        "logo": items[0][4],
        "img": items[0][5]
    }
    # close cursor and db connection
    c.close()
    db.close()

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
