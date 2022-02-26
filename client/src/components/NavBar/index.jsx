import { NavLink, Link } from "react-router-dom";
import * as authService from "../../api/auth.service";

export default function NavBar() {

	const handleLogout = async () => {
		console.log("in logout")
		const res = await authService.logout()
		return res
	}

	return (
		// <></> are placeholders!
		<>
			<div>
				{/* <Link
					// you can style inline, but doesn't assign an 'isActive' class :( )
					// style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
					to="/"
				>
					Home
				</Link>
				<Link to="/homies">Homies</Link> */}
				{/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class where it makes it easier to style! */}
				<NavLink 
                    style={{
                        padding: "10px"
                    }}
                    to="/">Home</NavLink>
                {/* <NavLink 
                    style={({ isActive }) => 
                    ({ color: isActive ? 'green' : 'blue' })}
                    to="/posts">Posts</NavLink> */}
                <NavLink 
                    style={{
                        padding: "10px"
                    }}
                    to="/homies">Homies</NavLink> 
				<NavLink to="/" onClick={handleLogout}>Logout</NavLink>
			</div>
		</>
	);
}
