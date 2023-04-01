import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from './../util/CurrentUser'

function GuestPropertyPage() {
	const [image, setImage] = useState(null)
	const [data, setData] = useState({file: ""})
	const formData = new FormData()
	
	useEffect(() => {
        formData.append("agentID", CurrentUser.getAgentID())
		fetch('/testGuestProperty', {
			method: 'POST',
			body: formData
    	})
			.then(res => res.json())
			.then(json => setData({file: json['file']}))
    }, [])
	
	console.log(data.file)
	
	return (
		<img src={'images/canvas.png'} alt="ok"/>
	)
}

export default GuestPropertyPage