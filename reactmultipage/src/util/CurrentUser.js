class CurrentUser {
	static auth = window.localStorage.getItem("auth")
	static agentID = window.localStorage.getItem("agentID")
	static agentFName = window.localStorage.getItem("agentFName")
	static agentLName = window.localStorage.getItem("agentLName")
	static agentEmail = window.localStorage.getItem("agentEmail")
	static agentPhone = window.localStorage.getItem("agentPhone")

	static getAuth() {
		return CurrentUser.auth
	}
	static getAgentID() {
		return CurrentUser.agentID
	}
	static getFName() {
		return CurrentUser.agentFName
	}
	static getLName() {
		return CurrentUser.agentLName
	}
	static getEmail() {
		return CurrentUser.agentEmail
	}
	static getPhone() {
		return CurrentUser.agentPhone
	}

	static setAuth(new_auth) {
		window.localStorage.setItem("auth", new_auth)
	}
	static setID(new_id) {
		window.localStorage.setItem("agentID", new_id)
	}
	static setFName(new_fname) {
		window.localStorage.setItem("agentFName", new_fname)
	}
	static setLName(new_lname) {
		window.localStorage.setItem("agentLName", new_lname)
	}
	static setEmail(new_email) {
		window.localStorage.setItem("agentEmail", new_email)
	}
	static setPhone(new_phone) {
		window.localStorage.setItem("agentPhone", new_phone)
	}
	static delAuth() {
		window.localStorage.removeItem("auth")
	}
}

export default CurrentUser