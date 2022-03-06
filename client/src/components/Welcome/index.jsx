import Login from "../../components/Login";
import Register from "../../components/Register";

// write formReducer here?

// define our Welcome functional component
const Welcome = () => {
	// what should the component return
	return (
		// Make sure to return some UI, it's about logging in now
		<div>
			<h1>Welcome to MyFlexSpace, 1026</h1>
			<div>
				Login:
				<Login checkUserActive={checkUserActive} />
			</div>
			<p>OR</p>
			<div>
				Register:
				<Register />
			</div>
		</div>
	);
};

export default Welcome;
