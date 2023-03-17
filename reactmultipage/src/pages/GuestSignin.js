import React from 'react'

function GuestSignin() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [prefEmail, setPrefEmail] = React.useState("");
  const [prefText, setPrefText] = React.useState("");
  const [prefNone, setPrefNone] = React.useState("");
  const handleBack = () => {};

  return (

    <div>
      <button onClick={handleBack}>Cancel</button>
   


    <form method="POST" action="/signin" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Sign In</h1>

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

      <p> Contact Preference:</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "10px" }}>
        <label>
          <input
            name="prefEmail"
            type="checkbox"
            id="prefEmail"
            onChange={(e) => setPrefEmail(e.target.checked)}
          />
          I would like to be emailed
        </label>

        <label>
          <input
            name="prefText"
            type="checkbox"
            id="prefText"
            onChange={(e) => setPrefText(e.target.checked)}
          />
          I would like to be texted
        </label>

        <label>
          <input
            name="prefNone"
            type="checkbox"
            id="prefNone"
            onChange={(e) => setPrefNone(e.target.checked)}
          />
          I prefer not to be contacted
        </label>
      </div>

      <button type="submit" value="Submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default GuestSignin
