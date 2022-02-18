import tellMyFlexSpaceTo from "./axios.config.js";

const authUrl = "/auth";

const register = (email, password) => {
	return tellMyFlexSpaceTo.post(`${authUrl}/register`, {
		email,
		password,
	});
};

const login = (email, password) => {
	return tellMyFlexSpaceTo
		.post(`${authUrl}/login`, { email, password })
		.then((res) => {
			if (res.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(res.data));
			}
			return res.data;
		});
};
const logout = () => {
	localStorage.removeItem("user");
};
const getCurrentUser = () => {
	let currentUser = localStorage.getItem("user");
	return JSON.parse(currentUser);
};

export { register, login, logout, getCurrentUser };
