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
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [preferText, setPreferText] = useState(false);
//   const [preferEmail, setPreferEmail] = useState(false);
//   const [preferNoContact, setPreferNoContact] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can add your code to submit the data to a server or database
//     console.log(firstName, email, phoneNumber, preferText, preferEmail, preferNoContact);
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Preferred Contact Method:</label>
//           <div>
//             <input
//               type="checkbox"
//               id="preferText"
//               checked={preferText}
//               onChange={(e) => setPreferText(e.target.checked)}
//             />
//             <label htmlFor="preferText">I prefer to be texted</label>
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               id="preferEmail"
//               checked={preferEmail}
//               onChange={(e) => setPreferEmail(e.target.checked)}
//             />
//             <label htmlFor="preferEmail">I prefer to be emailed</label>
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               id="preferNoContact"
//               checked={preferNoContact}
//               onChange={(e) => setPreferNoContact(e.target.checked)}
//             />
//             <label htmlFor="preferNoContact">I prefer to not be contacted</label>
//           </div>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
