import mysql.connector

def connect_to_db():
    db = mysql.connector.connect(
        host="database-1.cluster-cwnezg0iyvk9.us-east-1.rds.amazonaws.com",
        user="admin",
        password="boomtown",
        database="BoomTown"
    )
    return db

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
    c.execute(f"INSERT INTO Agent (agentFName, agentLName, agentPhone, agentEmail, agentPassword) VALUES ('{fname}', '{lname}', '{phone}', '{email}', '{password}')")
    c.execute(f"SELECT agentID from Agent ORDER BY agentID DESC LIMIT 1")
    aID = c.fetchone()
    db.commit()
    c.close()
    return aID
    
def match_agent_info(db, email, password):
    c = db.cursor()
    c.execute(f"SELECT agentID, agentFName, agentLName, agentEmail, agentPhone FROM Agent where agentEmail = '{email}' and agentPassword = '{password}'")
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
