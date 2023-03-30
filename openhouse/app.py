from flask import Flask, render_template, request, redirect, url_for, session
from btutils import connect_to_db, add_guest, update_agent, add_agent, match_agent_info, make_tables, allowed_file, make_filename
from json import *
import os
import datetime

# Setup--
UPLOAD_FOLDER = "./media"
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

make_tables() # make database in main directory

files = os.listdir() # check if media folder exists
if "media" not in files:
	os.mkdir("media") # make media folder if not exists
# os.chdir("media") # navigate to media folder # don't do this it breaks everything

MEDIA_DIRECTORY = os.getcwd() # save media directory for easy navigation back

# session['logged'] = "False"

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(12).hex()
app.config['SESSION_PERMANENT'] = True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# --Setup

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
   

# fix for updating specific 
@app.route("/adminPortalUpdate", methods=["GET", "POST"])
def adminPortalUpdate():
    db = connect_to_db()
    # also need to receive images if updated
    # print(session['fname'], session['lname'], session['email'], session['phone'])
    print("UPDATE: AGENT ID ->", session['aID'])
    print(request.form.get("fname"))
    update_agent(
        db, 
        request.form.get("fname"), 
        request.form.get("lname"), 
        request.form.get("email"), 
        request.form.get("phone"),
        session
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
	aID = add_agent(db, session['fname'], session['lname'], session['phone'], session['email'], passwd) # hash password before putting into db
	db.close()
	session['aID'] = aID[0]
	session['logged'] = "true"
	os.mkdir(os.path.join(UPLOAD_FOLDER, str(aID[0])))
	print("REGISTER: AGENT ID ->", session['aID'])
    # add check for duplicate email, phone, etc
	return redirect('http://localhost:3000/admindisplay')


# working
@app.route("/adminPortalSignin", methods=["GET", "POST"])
def adminPortalSignin() -> dict:
	db = connect_to_db()
	ret_val: tuple = match_agent_info(db, request.form.get("email"), request.form.get("passwd")) # hash input password in final version
	info = ret_val[1]
	print(request.form.get("email"), request.form.get("passwd"), ret_val[0], ret_val[1])
    # if user/pw pair found in db, e will be ("SUCCESS", <agentID>)
    # else, e will be ("FAIL", -1)
	if ret_val[0] == "SUCCESS":
		aID = info['aID']
		fname = info['fname']
		lname = info['lname']
		email = info['email']
		phone = info['phone']
		return {
			"resCode": 200,
			"agentID": aID,
			"agentFName": fname,
			"agentLName": lname,
			"agentEmail": email,
			"agentPhone": phone
		}
	else:
		return { "resCode": 400 }
    

# TODO: send current agent id and property id (from react session), save image to folder within folder named with agent id
# agent id = 1 and property id = 2 then -> .../1/2/image.extension
# add safe_filename
@app.route("/uploadPropertyImg", methods=["GET", "POST"])
def uploadPropertyImg():
	# gets file data from formData
	agentID = request.files.get('agentID')
	file = request.files.get('file')
	filename = request.form.get('filename')
	print("FILE EXT: ", filename.rsplit('.', 1)[1].lower())
	if allowed_file(filename, ALLOWED_EXTENSIONS):
		new_filename = make_filename(filename, datetime.datetime.now())
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
		resp = {200: "File was successfully uploaded."}
	else:
		resp = {400: "Unexpected filetype."}
	return resp


# call this to get current agent info from react frontend
@app.route("/getSessionInfo", methods=["GET", "POST"])
def getSessionInfo():
	agentID = session.get('aID')
	fname = session.get('fname')
	lname = session.get('lname')
	email = session.get('email')
	phone = session.get('phone')
	
	return {
		"aID": agentID,
        "fname":fname, 
        "lname":lname,
        "phone":phone, 
        "email":email
    }


@app.route("/checkAuth", methods=["GET"])
def checkAuth():
	auth = session.get('logged')
	print(auth)
	return { 'logged': auth }
	


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
