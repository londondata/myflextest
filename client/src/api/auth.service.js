// auth service worker to handle all auth and secure user functionality
import tellMyFlexSpaceTo from "./axios.config.js";

const auth = "/auth";
const users = "/users";

// when you create a password for the first time based on the email in the database

const register = (email, password) => {
	return tellMyFlexSpaceTo
		.post(`${auth}/register`, { email, password })
		.then((res) => {
			console.log(res);
		});
};

// upon login or if current User, we receieve the token from our backend, and store it in local storage for easy retrieval anytime we may need it! how dope!

const login = (email, password) => {
	try {
		return tellMyFlexSpaceTo
			.post(`${auth}/login`, { email, password })
			.then((res) => {
				console.log(res);
				if (res.data.token) {
					localStorage.setItem("user", JSON.stringify(res.data.token));
				}
				return res.data.token;
			});
	} catch (err) {
		console.log(err);
	}
};

// this checks to see if a current user exists, if it exists in localStorage at all. if so, return currentUser pls!
const currentUser = () => {
	let user = localStorage.getItem("user");
	return JSON.parse(user);
};

// because we have the token in the header, we can just hit the route here
const getProfile = () => {
	return tellMyFlexSpaceTo.get(`${users}/profile`);
};

// for security, we logout and clear the token in local storage
const logout = () => {
	localStorage.removeItem("user");
};

export { register, login, currentUser, getProfile, logout };
