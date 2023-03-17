import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuestSignin from './pages/GuestSignin'

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='signin' element={ <GuestSignin/> } />
      </Routes>
    </div>
  )
} // additional pages are added into Routes block
    
export default App;
