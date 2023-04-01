import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './util/ProtectedRoutes'
import Home from './pages/Home'
import GuestSignin from './pages/GuestSignin'
import AdminRegister from './pages/AdminRegister'
import AdminSignin from './pages/AdminSignin'
import AdminDisplay from './pages/AdminDisplay'
import AdminUpdate from './pages/AdminUpdate'
import UploadPropImg from './pages/AdminUploadPropImg'
import PropertiesPage from './pages/properties'
import PropertyAdminPage from './pages/propertiesAdminPage'
import GuestPropertyPage from './pages/GuestPropertyPage'

function App(){
  return (
    <div className="App">
      <Routes>
	  	<Route element={ <ProtectedRoutes/> }>
        	<Route path='adminregister' element={ <AdminRegister/> } />
        	<Route path='admindisplay' element={ <AdminDisplay/> } />
        	<Route path='adminupdate' element={ <AdminUpdate/> } />
			<Route path='testupload' element={ <UploadPropImg/> } />
		</Route>
		<Route path='guestproperty' element={ <GuestPropertyPage/> } />
		<Route path='properties' element={ <PropertiesPage/> } />
		<Route path='propertyadmin' element={ <PropertyAdminPage/> } />
		<Route path='adminsignin' element={ <AdminSignin/> } />
		<Route path='signin' element={ <GuestSignin/> } />
		<Route path='/' element={ <Home/> } />
      </Routes>
    </div>
  )
} // additional pages are added into Routes block
    
export default App;
