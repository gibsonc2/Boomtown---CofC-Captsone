import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuestSignin from './pages/GuestSignin'
import AdminRegister from './pages/AdminRegister'
import AdminSignin from './pages/AdminSignin'
import AdminDisplay from './pages/AdminDisplay'

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='signin' element={ <GuestSignin/> } />
        <Route path='adminregister' element={ <AdminRegister/> } />
        <Route path='adminsignin' element={ <AdminSignin/> } />
        <Route path='admindisplay' element={ <AdminDisplay/> } />
      </Routes>
    </div>
  )
} // additional pages are added into Routes block
    
export default App;
