import { useState, useEffect, useReducer } from "react";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import Welcome from "../../components/Welcome";
import Homies from "../HomiesPage";
import NavBar from "../../components/NavBar";
import { Routes, Route } from "react-router-dom";
import * as postService from "../../api/post.service";
import * as authService from "../../api/auth.service";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "setPosts":
			return { ...prevState, posts: action.payload };
		case "isLoggedIn":
			return { ...prevState, isLoggedIn: !prevState.isLoggedIn };
		default:
			return prevState;
	}
};

const initialState = {
	posts: [],
	isLoggedIn: false,
};

const HomePage = () => {
	// const [posts, setPosts] = useState([]);

	const [state, dispatch] = useReducer(reducer, initialState);
	const { posts, isLoggedIn } = state;

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			dispatch({ type: "setPosts", payload: res.data.data.reverse() });
		});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

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
							<PostForm getPostsAgain={() => fetchPosts()} />
							{posts.map((post) => {
								return (
									<Post
										title={post.title}
										author={post.author}
										body={post.body}
										key={post._id}
									/>
								);
							})}
						</>
					}
				></Route>
			</Routes>
		</div>
	);
};

export default HomePage;

/* Router Notes:
- Routes renders the first child (Route or Redirect) that matches the location requested. It also renders routes exclusively and not all at once.
- Routes renders UI when path matches URL. When dealing with parameter values (ex. /:id),  routes, use a trailing * in their path to indicate they match deeply (ex. `path="/*") would mean that the root takes preference over /:id for an exact match) Though since the v6 update, its way more intuitive!
*/
