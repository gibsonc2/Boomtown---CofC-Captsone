import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminRegister() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [passwd, setPasswd] = React.useState("");
	
  const navigate = useNavigate();
  const routeChange = () => {
	  navigate('/');
  }

  return (

    <div>
      <button onClick={routeChange}>Cancel</button>
   
    <form method="POST" action="/adminPortalRegister" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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

      <button type="submit" value="Submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default AdminRegister
