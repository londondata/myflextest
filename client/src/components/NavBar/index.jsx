import { NavLink, Route, Routes } from "react-router-dom";
import Post from "../Post";
import PostForm from "../PostForm";
import Homies from "../../containers/HomiesPage";
import Profile from "../../containers/ProfilePage";
import * as authService from "../../api/auth.service";

const NavBar = ({ checkUserActive, fetchAllPosts, posts }) => {
	const handleLogout = async () => {
		console.log("in logout");
		const res = await authService.logout();
		checkUserActive();
		return res;
	};

	return (
		<>
			<div>
				<NavLink
					style={{
						padding: "10px",
					}}
					to="/"
				>
					Home
				</NavLink>

				<NavLink
					style={{
						padding: "10px",
					}}
					to="/homies"
				>
					Homies
				</NavLink>

				<NavLink
					style={{
						padding: "10px",
					}}
					to="/profile"
				>
					Profile
				</NavLink>

				<NavLink to="/" onClick={handleLogout}>
					Logout
				</NavLink>
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<PostForm getPostsAgain={() => fetchAllPosts()} />
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

				<Route path="homies" element={<Homies />}></Route>

				<Route
					path="/profile"
					element={<Profile checkUserActive={{ checkUserActive }} />}
				></Route>
			</Routes>
		</>
	);
};

export default NavBar;
