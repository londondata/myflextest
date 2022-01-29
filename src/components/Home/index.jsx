import React from "react";
import Post from "./components/Post";
import Welcome from "./components/Welcome";

const post = {
	title: "Eff Off Zuck",
	author: "Miss London",
	body: "I secretly recruited a group of superheroes to save the Internet",
};

function Home(props) {
	return (
		<div>
			<Welcome name={"Teri"} location={"San Francisco"} />
			<Post title={post.title} author={post.author} body={post.body} />
		</div>
	);
}

export default Home;
