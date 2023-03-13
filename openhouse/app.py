from flask import Flask, render_template, request, redirect
from btutils import connect_to_db, add_guest, update_agent, add_agent, match_agent_info
import mysql.connector

app = Flask(__name__)

@app.route("/signin", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        db = connect_to_db()
        commPrefs = getCommPrefs(request.form.get('prefEmail'), request.form.get('prefText'), request.form.get('prefNone'))
        add_guest(
            db, 
            request.form.get("fname"), 
            request.form.get("lname"), 
            request.form.get("email"), 
            request.form.get("phone"), 
            commPrefs
        )
        db.close()
    return redirect("http://localhost:3000")


@app.route("/adminPortalDisplay", methods=["GET", "POST"])
def adminPortalDisplay():
    db = connect_to_db()  # establish database connection
    c = db.cursor()  # create cursor for interacting with db
    # query db
    c.execute("SELECT agentFName, agentLName, agentPhone, agentEmail, logoPath, agentImgPath FROM Agent") # where agentID = ID retrieved from react
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
    # need to also look into how to pull and send images to react
    # close cursor and db connection
    c.close()
    db.close()
   

@app.route("/adminPortalUpdate", methods=["GET", "POST"])
def adminPortalUpdate():
    db = connect_to_db()
    # also need to receive images if updated
    update_agent(
        db, 
        request.form.get("fname"), 
        request.form.get("lname"), 
        request.form.get("email"), 
        request.form.get("phone")
    )
    db.close()
    return redirect("http://localhost:3000")


@app.route("/adminPortalRegister", methods=["GET", "POST"])
def adminPortalRegister():
    db = connect_to_db()
    add_agent(
        db,
        request.form.get("fname"), 
        request.form.get("lname"), 
        request.form.get("email"), 
        request.form.get("phone"),
        request.form.get("password")
    ) # hash password before putting into db
    # add check for duplicate email, phone, etc
    db.close()
    return redirect("http://localhost:3000")


@app.route("/adminPortalSignin", methods=["GET", "POST"])
def adminPortalSignin():
    db = connect_to_db()
    e = match_agent_info(db, request.form.get("email"), request.form.get("password")) # hash input password in final version
    # if user/pw pair found in db, e will be ("SUCCESS", <agentID>)
    # else, e will be ("FAIL", -1)
    return {
        "code":e[0],
        "aID":e[1]
    } # react will retrieve these values and either display info for agent with given ID ("SUCCESS")
      # or prompt user to try again ("FAIL")
    

# temporary solution
def getCommPrefs(einput, tinput, ninput):
    if ninput == 'on':
        return 0 # do not contact
    elif einput == 'on' and tinput is None:
        return 1 # contact by email only
    elif einput is None and tinput == 'on':
        return 2 # contact by text only
    else:
        return 3 # contact by text or email
