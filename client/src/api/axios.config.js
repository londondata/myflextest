// base URLs are used in real industry projects to reduce repetitive code. rather than writing the same domain or things that don't change with the request, we set up this file as configuration settings for axios, and then export them. axios.config.js is newer industry standard syntax
import axios from "axios";

const backendAPI = "http://localhost:4000/api";

// tellMyFlexSpaceTo is fun for us and fun for learning. it's dope. this could easily be called api or client or even apiClient.
//switch baseURL depending on whether or not you are local or pushing to heroku
const tellMyFlexSpaceTo = axios.create({
	baseURL: `${backendAPI}`,
	// baseURL: "https://myflexspace1026.herokuapp.com/api/",
	headers: {
		"Content-type": "application/json",
	},
});

export default tellMyFlexSpaceTo;
