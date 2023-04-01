import React from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from './../util/CurrentUser'

function AdminRegister() {
	const [fname, setFName] = React.useState("");
	const [lname, setLName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [passwd, setPasswd] = React.useState("");
	
	const formData = new FormData()
	const AuthUser = (json) => {
		if(json['resCode'] == 200) {
			//CurrentUser.delAuth()
			console.log(json['resCode'], "Successful sign-in")
			CurrentUser.setID(json['agentID'])
			CurrentUser.setFName(json['agentFName'])
			CurrentUser.setLName(json['agentLName'])
			CurrentUser.setEmail(json['agentEmail'])
			CurrentUser.setPhone(json['agentPhone'])
			CurrentUser.setAuth('true')
			console.log(CurrentUser.getFName())
			navigate('/admindisplay')
		} else {
			console.log(json['resCode'], 'Bad request.')
			CurrentUser.setAuth('false')
		}
	}
	
	const navigate = useNavigate();
	const routeChange = () => {
		navigate('/');
	}
	
	const submit = e => {
		e.preventDefault()
		formData.append("fname", fname)
		formData.append("lname", lname)
		formData.append("email", email)
		formData.append("phone", phone)
		formData.append("passwd", passwd)
		fetch('/adminPortalRegister', {
			method: 'POST',
			body: formData
    	})
			.then(res => res.json())
			.then(json => AuthUser(json))
	}
  
  return (

    <div>
      <button onClick={routeChange}>Cancel</button>
   
    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Register</h1>

      <label style={{ marginBottom: "10px" }}>
        First Name:
        <input
          name="fname"
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          required
          style={{ marginLeft: "10px" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        Last Name:
        <input
          name="lname"
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          required
          style={{ marginLeft: "10px" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        Email:
        <input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginLeft: "26px" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        Phone:
        <input
          name="phone"
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ marginLeft: "27px" }}
        />
      </label>

	  <label style={{ marginBottom: "10px" }}>
        Password:
        <input
          name="passwd"
          type="text"
          id="passwd"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
          required
          style={{ marginLeft: "27px" }}
        />
      </label>

      <button type="submit" value="Submit" onClick={submit} style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default AdminRegister
