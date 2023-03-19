from flask import Flask, render_template, request, redirect, url_for, session
from btutils import connect_to_db, add_guest, update_agent, add_agent, match_agent_info
import mysql.connector
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(12).hex()
# app.config['SESSION_PERMANENT'] = False


# working
@app.route("/guestSignin", methods=["GET", "POST"])
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


# working
@app.route("/adminPortalDisplay", methods=["GET", "POST"])
def adminPortalDisplay():
    db = connect_to_db()  # establish database connection
    c = db.cursor()  # create cursor for interacting with db
    
    fname = session.get('fname')
    lname = session.get('lname')
    phone = session.get('phone')
    email = session.get('email')
    
    # return items to react server
    # items[0] is the entire tuple retrieved from query, so we need to index further into that
    # need to also look into how to pull and send images to react
    # close cursor and db connection
    c.close()
    db.close()
    
    return {
        "fname":fname, 
        "lname":lname,
        "phone":phone, 
        "email":email,
        "logo": "logo",
        "img": "img"
    }
   

# fix
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
    return redirect("http://localhost:3000/admindisplay")


# working
@app.route("/adminPortalRegister", methods=["GET", "POST"])
def adminPortalRegister():
    session['fname'] = request.form.get("fname")
    session['lname'] = request.form.get("lname")
    session['email'] = request.form.get("email")
    session['phone'] = request.form.get("phone")
    passwd = request.form.get("passwd")
    db = connect_to_db()
    add_agent(db, session['fname'], session['lname'], session['email'], session['phone'], passwd) # hash password before putting into db
    db.close()
    # add check for duplicate email, phone, etc
    return redirect('http://localhost:3000/admindisplay')


# working
@app.route("/adminPortalSignin", methods=["GET", "POST"])
def adminPortalSignin():
    db = connect_to_db()
    ret_val = match_agent_info(db, request.form.get("email"), request.form.get("passwd")) # hash input password in final version
    info = ret_val[1]
    # if user/pw pair found in db, e will be ("SUCCESS", <agentID>)
    # else, e will be ("FAIL", -1)
    if ret_val[0] == "SUCCESS":
        session['aID'] = info['aID']
        session['fname'] = info['fname']
        session['lname'] = info['lname']
        session['email'] = info['email']
        session['phone'] = info['phone']
        return redirect('http://localhost:3000/admindisplay')
    else:
        return redirect('http://localhost:3000/adminsignin')
    
    
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

