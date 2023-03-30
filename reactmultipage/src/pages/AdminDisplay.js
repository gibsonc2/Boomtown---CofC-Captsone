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
  
	const [data, setdata] = useState({
	// initializing variable names as empty strings
		fname: "",
		lname: "",
		phone: "",
		email: "",
		logo: "",
		img: ""
	});
	
	console.log(CurrentUser.getPhone())
	
	useEffect(() => {
        fetch("/adminPortalDisplay").then((res) =>
            res.json().then((data) => {
                // data.<var> is coming from flask; <var> must match flask variable name
                setdata({
                    fname: data.fname,
                    lname: data.lname,
                    phone: data.phone,
                    email: data.email,
                    logo: data.logo,
                    img: data.img
                });
            })
        );
    }, []);
  
	
	return (
      <div className="App">
		  <button onClick={routeChange}>Update Info</button>
          <header className="App-header">
                <p>{CurrentUser.getFName()}</p>
                <p>{CurrentUser.getLName()}</p>
                <p>{CurrentUser.getEmail()}</p>
                <p>{CurrentUser.getPhone()}</p>
          </header>
      </div>
  );
}

export default AdminDisplay
