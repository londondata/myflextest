import tellMyFlexSpaceTo from "./axios.config.js";

const authUrl = "/auth";

// when you create a password for the first time based on the email in the database
const register = (email, password) => {
	return tellMyFlexSpaceTo.post(`${authUrl}/register`, {
		email,
		password,
	});
};

const login = (email, password) => {
	 try{
		tellMyFlexSpaceTo
		.post(`${authUrl}/login`, { email, password })
		.then((res) => {
			console.log(res)
			if (res.data.token) {
				localStorage.setItem("user", JSON.stringify(res.data.token));
			}
			return res.data.token;
		});
	} catch (err) {
		console.log(err)
	}
};

const currentUser = () => {
	let user = localStorage.getItem("user");
	return JSON.parse(user);
};

const logout = () => {
	localStorage.removeItem("user");
};

export { register, login, currentUser, logout };
