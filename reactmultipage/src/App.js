import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuestSignin from './pages/GuestSignin'
import AdminRegister from './pages/AdminRegister'
import AdminSignin from './pages/AdminSignin'
import AdminDisplay from './pages/AdminDisplay'
import AdminUpdate from './pages/AdminUpdate'
import UploadPropImg from './pages/AdminUploadPropImg'

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='signin' element={ <GuestSignin/> } />
        <Route path='adminregister' element={ <AdminRegister/> } />
        <Route path='adminsignin' element={ <AdminSignin/> } />
        <Route path='admindisplay' element={ <AdminDisplay/> } />
        <Route path='adminupdate' element={ <AdminUpdate/> } />
		<Route path='testupload' element={ <UploadPropImg/> } />
      </Routes>
    </div>
  )
} // additional pages are added into Routes block
    
export default App;
