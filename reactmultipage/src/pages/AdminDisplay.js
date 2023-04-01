import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import CurrentUser from './../util/CurrentUser'

// test react page that just shows data retrieved from flask

function AdminDisplay() {
	// everything before return can be used in final code
	
	const navigate = useNavigate();
	const routeChange = () => {
		navigate('/adminupdate');
	}
  
	const fname = CurrentUser.getFName()
	const lname = CurrentUser.getLName()
	const email = CurrentUser.getEmail()
	const phone = CurrentUser.getPhone()
	
  	
	return (
      <div className="App">
		  <button onClick={routeChange}>Update Info</button>
          <header className="App-header">
                <p>{fname}</p>
                <p>{lname}</p>
                <p>{email}</p>
                <p>{phone}</p>
          </header>
      </div>
  );
}

export default AdminDisplay
