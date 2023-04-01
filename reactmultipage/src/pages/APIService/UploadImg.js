export default class UploadImg{
	static SendImg(body){
		return fetch("/uploadPropertyImg", {
			"method": "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body:JSON.stringify(body)
		})
		.then(response => response.json())
		.catch(error => console.log(error))
	}
}