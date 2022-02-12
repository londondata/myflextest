import React from "react";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import Welcome from "../../components/Welcome";
import Homies from "../HomiesPage";
import NavBar from "../../components/NavBar";
import { Routes, Route } from "react-router-dom";
import * as postService from "../../api/post.service";

const post = {
	title: "Eff Off Zuck",
	author: "Miss London",
	body: "I secretly recruited a group of superheroes to save the Internet",
};

const Home = (props) => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="homies" element={<Homies />}></Route>
				<Route
					path="/"
					element={
						<>
							<Welcome />
							<PostForm />
						</>
					}
				></Route>
				<Route
					path="/posts"
					element={
						<Post
							title={post.title}
							author={post.author}
							body={post.body}
							comments={post.comments}
						/>
					}
				></Route>
			</Routes>
		</div>
	);
};

export default Home;

/* Router Notes:
- Routes renders the first child (Route or Redirect) that matches the location requested. It also renders routes exclusively and not all at once.
- Routes renders UI when path matches URL. When dealing with parameter values (ex. /:id),  routes, use a trailing * in their path to indicate they match deeply (ex. `path="/*") would mean that the root takes preference over /:id for an exact match) Though since the v6 update, its way more intuitive!
*/
