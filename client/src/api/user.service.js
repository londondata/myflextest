import tellMyFlexSpaceTo from "./axios.config.js";
// tellMyFlexSpaceTo is the instance of axios.create we created and includes the insance methods we need: .get .post .put .delete and others listed in the docs.

const users = "/users";

const getProfile = () => {
	return tellMyFlexSpaceTo.get(`${users}/profile`);
};


// you can only export default when there's one thing to export
export { getProfile };
