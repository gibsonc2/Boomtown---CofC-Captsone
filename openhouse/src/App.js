import React from "react";

export default function App() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${fname}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

  return (
    <form method='POST' action='/signin'> // will send form data to /signin in flask app
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
          name="acceptedTerms"
          type="checkbox"
          id="acceptedTerms"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button
          type="submit"
          value="Submit"
       >Submit
      </button>

    </form>
    );
}
