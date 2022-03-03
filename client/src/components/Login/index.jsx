import { useReducer } from "react";
import * as authService from "../../api/auth.service";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "setEmail":
			return { ...prevState, email: action.payload };
		case "setPassword":
			return { ...prevState, password: action.payload };
		default:
			return prevState;
	}
};

const initialState = {
	email: "",
	password: "",
};

const Login = ({ checkUserActive }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { email, password } = state;

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.login(email, password).then(() => {
			checkUserActive();
		});

		dispatch({ type: "setEmail", payload: " " });
		dispatch({ type: "setPassword", payload: " " });
	};

	return (
		<div>
			<form>
				<label htmlFor="email">
					Email:
					<input
						onChange={(e) =>
							dispatch({ type: "setEmail", payload: e.target.value })
						}
						value={email}
						type="text"
						name="email"
						placeholder="Enter your Email"
					/>
				</label>
				<label htmlFor="password">
					Password:
					<input
						onChange={(e) =>
							dispatch({ type: "setPassword", payload: e.target.value })
						}
						value={password}
						type="text"
						name="password"
						placeholder="Enter your password"
					/>
				</label>

				<button onClick={handleSubmit}>Login</button>
			</form>
		</div>
	);
};

export default Login;
