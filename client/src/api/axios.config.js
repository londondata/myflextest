// we set up this config file as an instance of axios, and then export it. axios.config.js as a naming convention is newer industry standard syntax.
import axios from "axios";

const backendAPI = "http://localhost:4000/api";

// tellMyFlexSpaceTo is fun for us and fun for learning. it's dope. this could easily be called api or client or even apiClient.
// base URLs are used in real industry projects to reduce repetitive code. use an instance with base url rather than writing the same domain or things that don't change with the request
//switch baseURL depending on whether or not you are local or pushing to heroku
const tellMyFlexSpaceTo = axios.create({
	baseURL: `${backendAPI}`,
	// baseURL: "https://myflexspace1026.herokuapp.com/api/",
	headers: {
		"Content-type": "application/json",
	},
});

export default tellMyFlexSpaceTo;
