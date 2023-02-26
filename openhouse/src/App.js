import React from "react";

export default function App() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [prefEmail, setPrefEmail] = React.useState("");
  const [prefText, setPrefText] = React.useState("");
  const [prefNone, setPrefNone] = React.useState("");

  return (
    <form method='POST' action='/signin'>
      <h1>Create Account</h1>

      <label>
        First Name:
        <input
          name="fname"
          type="fname"
          id="fname"
          value={fname}
          onChange={e => setFName(e.target.value)}
          required />
      </label>

      <label>
        Last Name:
        <input
          name="lname"
          type="lname"
          id="lname"
          value={lname}
          onChange={e => setLName(e.target.value)}
          required />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Phone:
        <input
          name="phone"
          type="phone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required />
      </label>

      <label>
        <input
          name="prefEmail"
          type="checkbox"
          id="prefEmail"
          onChange={e => setPrefEmail(e.target.value)}
          />
        I would like to be emailed
      </label>

      <label>
        <input
          name="prefText"
          type="checkbox"
          id="prefText"
          onChange={e => setPrefText(e.target.value)}
          />
        I would like to be texted
      </label>

      <label>
        <input
          name="prefNone"
          type="checkbox"
          id="prefNone"
          onChange={e => setPrefNone(e.target.value)}
          />
        I prefer not to be contacted
      </label>

      <button
          type="submit"
          value="Submit"
       >Submit
      </button>

    </form>
    );
}
