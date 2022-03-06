import { useEffect, useReducer } from "react";
import Welcome from "../../components/Welcome";
import NavBar from "../../components/NavBar";
import * as postService from "../../api/post.service";
import * as authService from "../../api/auth.service";

// refactor posts from useState to useReducer so we can also manage global state of isLoggedIn

const reducer = (prevState, action) => {
	switch (action.type) {
		case "setPosts":
			return { ...prevState, setPosts: action.payload };
		case "isLoggedIn":
			return { ...prevState, isLoggedIn: action.payload };
		default:
			return prevState;
	}
};

const initialState = {
	posts: [],
	isLoggedIn: false,
};

const HomePage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { posts, isLoggedIn } = state;

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			dispatch({ type: "setPosts", payload: res.data.data.reverse() });
		});
	};

	// bring in currentUser from where we wrote the logic in the authService and use it to determine whether or not the user is logged in
	const userActive = () => {
		if (authService.currentUser()) {
			dispatch({ type: "isLoggedIn", payload: true });
		} else {
			dispatch({ type: "isLoggedIn", payload: false });
		}
	};

	// add userActive to useEffect so we are always checking to see if our user is logged in

	useEffect(() => {
		fetchPosts();
		userActive();
	}, []);

	// wrap the entire navBar in an if statement, ifLoggedIn is available, else show login and register

	if (isLoggedIn) {
		return (
			<div>
				<NavBar
					checkUserActive={() => userActive()}
					fetchAllPosts={() => fetchPosts()}
					posts={[posts]}
				/>
			</div>
		);
	} else {
		return (
			<div>
				<Welcome
					checkUserActive={() =>
						dispatch({ type: "isLoggedIn", payload: true })
					}
				/>
			</div>
		);
	}
};

export default HomePage;

/* Router Notes:
- Routes renders the first child (Route or Redirect) that matches the location requested. It also renders routes exclusively and not all at once.
- Routes renders UI when path matches URL. When dealing with parameter values (ex. /:id),  routes, use a trailing * in their path to indicate they match deeply (ex. `path="/*") would mean that the root takes preference over /:id for an exact match) Though since the v6 update, its way more intuitive!
*/
