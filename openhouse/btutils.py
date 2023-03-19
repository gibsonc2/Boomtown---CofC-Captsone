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
    
def update_agent(db, fname, lname, phone, email):
    # change to use update table
    c = db.cursor()
    c.execute(f"INSERT INTO Agent (agentFName, agentLName, agentPhone, agentEmail) VALUES ('{fname}', '{lname}', '{phone}', '{email}')")
    db.commit()
    c.close()
    
def add_agent(db, fname, lname, phone, email, password):
    c = db.cursor()
    c.execute(f"INSERT INTO Agent (agentFName, agentLName, agentPhone, agentEmail, agentPassword) VALUES ('{fname}', '{lname}', '{phone}', '{email}', '{password}')")
    db.commit()
    c.close()
    
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
