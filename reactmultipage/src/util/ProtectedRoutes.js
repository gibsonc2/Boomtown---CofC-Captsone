import React, {useState, useLocalStorage, useEffect} from "react";
import { Outlet, Navigate } from 'react-router-dom'
import CurrentUser from './CurrentUser'

const ProtectedRoutes = () => {
	let authStatus = false
	if(CurrentUser.getAuth() == "true") { 
		authStatus = true 
	}
	return (
		authStatus ? <Outlet/> : <Navigate to="/adminsignin"/>
	)
}

export default ProtectedRoutes