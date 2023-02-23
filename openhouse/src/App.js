import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferText, setPreferText] = useState(false);
  const [preferEmail, setPreferEmail] = useState(false);
  const [preferNoContact, setPreferNoContact] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePreferTextChange = (event) => {
    setPreferText(event.target.checked);
  };

  const handlePreferEmailChange = (event) => {
    setPreferEmail(event.target.checked);
  };

  const handlePreferNoContactChange = (event) => {
    setPreferNoContact(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form data goes here
  };

  return (
    <div className="form-container">
      <button className="back-button">&#8592; Back</button>
      <h1 className="title">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name-input">First Name:</label>
          <input
            id="first-name-input"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="phone-number-input">Phone Number:</label>
          <input
            id="phone-number-input"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className="checkbox-container">
          <label htmlFor="prefer-text-checkbox">
            <input
              id="prefer-text-checkbox"
              type="checkbox"
              checked={preferText}
              onChange={handlePreferTextChange}
            />
            I prefer to be texted
          </label>
        </div>
        <div className="checkbox-container">
          <label htmlFor="prefer-email-checkbox">
            <input
              id="prefer-email-checkbox"
              type="checkbox"
              checked={preferEmail}
              onChange={handlePreferEmailChange}
            />
            I prefer to be emailed
          </label>
        </div>
        <div className="checkbox-container">
          <label htmlFor="prefer-no-contact-checkbox">
            <input
              id="prefer-no-contact-checkbox"
              type="checkbox"
              checked={preferNoContact}
              onChange={handlePreferNoContactChange}
            />
            I prefer to not be contacted
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;