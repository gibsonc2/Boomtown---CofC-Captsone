import React, { useState } from "react";
import UploadImg from "./APIService/UploadImg"
import CurrentUser from "./../util/CurrentUser"

const UploadPropImg = () => {
	
	const [image, setImage] = useState(null)
	const [fileName, setFileName] = useState("")
	const formData = new FormData()
	
	if (image != null) {
		formData.append("file", image)
		formData.append("filename", fileName)
		formData.append("agentID", CurrentUser.getAgentID())
		fetch("/uploadPropertyImg", {
			method: "POST",
			body: formData
		})
		.then(response => response.json())
		.then(json => console.log.json())
	}
	

	return (
    	<div>
    		<h1>Upload and Display Image</h1>

    		{image && (
    			<div>
    				<img
    					alt="not found"
    					width={"250px"}
    					src={URL.createObjectURL(image)}
    				/>
    				<br />
    				<button onClick={() => setImage(null)}>Remove</button>
    			</div>
    		)}

    		<br />
    		<br />
      
    		<input
    			type="file"
				id="imgUpload"
    			name="imgUpload"
    			onChange={(event) => {
    				console.log(event.target.files[0]);
    				setImage(event.target.files[0]);
					setFileName(event.target.files[0].name);
    			}}
    		/>
    	</div>
    )
}

export default UploadPropImg