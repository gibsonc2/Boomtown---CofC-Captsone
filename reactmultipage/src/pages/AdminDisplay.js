import React, {useState, useEffect} from "react";

// test react page that just shows data retrieved from flask

function AdminDisplay() {
  // everything before return can be used in final code
  const [data, setdata] = useState({
    // initializing variable names as empty strings
    	fname: "",
		lname: "",
		phone: "",
		email: "",
    	logo: "",
    	img: ""
	});
	
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
          <header className="App-header">
                {/* data.<var> is what we put into html */}
                <p>{data.fname}</p>
                <p>{data.lname}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <p>{data.logo}</p>
                <p>{data.img}</p>
          </header>
      </div>
  );
}

export default AdminDisplay
