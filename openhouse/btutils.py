import sqlite3

def connect_to_db():
    db = sqlite3.connect("boomtown.db")
    return db

def make_tables():
	db = connect_to_db()
	cur = db.cursor()
	cur.execute("CREATE TABLE IF NOT EXISTS Guest(guestID INTEGER PRIMARY KEY AUTOINCREMENT, propertyID INTEGER, guestFName TEXT, guestLName TEXT, guestEmail TEXT, guestPhone TEXT, guestCommPref INTEGER, dateOfVisit TEXT, FOREIGN KEY(propertyID) REFERENCES Property(propertyID))")
	cur.execute("CREATE TABLE IF NOT EXISTS Agent(agentID INTEGER PRIMARY KEY AUTOINCREMENT, agentFName TEXT, agentLName TEXT, agentEmail TEXT, agentPhone TEXT, agentPass TEXT)")
	cur.execute("CREATE TABLE IF NOT EXISTS Property(propertyID INTEGER PRIMARY KEY AUTOINCREMENT, agentID INTEGER, propertyType TEXT, propertySize TEXT, numBeds INTEGER, numBaths TEXT, FOREIGN KEY(agentID) REFERENCES Agent(agentID))")
	db.commit()
	print("Created tables")
	
def add_guest(db, fname, lname, email, phone, commPref):
    c = db.cursor()
    c.execute(f"INSERT INTO Guest (guestFName, guestLName, guestEmail, guestPhone, guestCommPref) VALUES ('{fname}', '{lname}', '{email}', '{phone}', {commPref})")
    db.commit()
    c.close()
    
def update_agent(db, fname, lname, email, phone, session):
    c = db.cursor()
    print(fname, lname, phone, email)
    if fname != "":
        c.execute(f"UPDATE Agent SET agentFName = '{fname}' WHERE agentID = '{session['aID']}'")
        session.pop('fname', None)
        session['fname'] = fname
    if lname != "":   
        c.execute(f"UPDATE Agent SET agentLName = '{lname}' WHERE agentID = '{session['aID']}'")
        session.pop('lname', None)
        session['lname'] = lname
    if phone != "":
        c.execute(f"UPDATE Agent SET agentPhone = '{phone}' WHERE agentID = '{session['aID']}'")
        session.pop('phone', None)
        session['phone'] = phone
    if email != "":
        c.execute(f"UPDATE Agent SET agentEmail = '{email}' WHERE agentID = '{session['aID']}'")
        session.pop('email', None)
        session['email'] = email
    db.commit()
    c.close()
    
def add_agent(db, fname, lname, phone, email, password):
    c = db.cursor()
    c.execute(f"INSERT INTO Agent (agentFName, agentLName, agentPhone, agentEmail, agentPass) VALUES ('{fname}', '{lname}', '{phone}', '{email}', '{password}')")
    c.execute(f"SELECT agentID from Agent ORDER BY agentID DESC LIMIT 1")
    aID = c.fetchone()
    db.commit()
    c.close()
    return aID
    
def match_agent_info(db, email, password):
    c = db.cursor()
    c.execute(f"SELECT agentID, agentFName, agentLName, agentEmail, agentPhone FROM Agent where agentEmail = '{email}' and agentPass = '{password}'")
    data = c.fetchone()
    print(data)
    if data is not None:
        info = {
            "aID": data[0],
            "fname": data[1],
            "lname": data[2],
            "email": data[3],
            "phone": data[4]
        }
        return ("SUCCESS", info)
    else:
        return ("FAIL", -1)
	
def allowed_file(filename, ALLOWED_EXTENSIONS) -> bool:
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def make_filename(filename, now):
	ext = "." + filename.rsplit('.', 1)[1].lower()
	day = str(now.day)
	month = str(now.month)
	year = str(now.year)
	time = str(now.hour) + str(now.minute) + str(now.second) + str(now.microsecond)
	return month + day + year + "-" + time + ext
