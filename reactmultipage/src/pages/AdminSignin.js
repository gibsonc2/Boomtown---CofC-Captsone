import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminSignin() {
  const [email, setEmail] = React.useState("");
  const [passwd, setPasswd] = React.useState("");
  
  const navigate = useNavigate();
  const routeChange = () => {
	  navigate('/');
  }

  return (

    <div>
      <button onClick={routeChange}>Cancel</button>
   
    <form method="POST" action="/adminPortalSignin" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Sign In</h1>

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

export default AdminSignin
