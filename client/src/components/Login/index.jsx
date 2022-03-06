import { useState } from "react";
import * as authService from "../../api/auth.service";

const Login = ({ checkUserActive }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.login(email, password).then(() => {
			console.log("inside then")
			{checkUserActive()}
			setEmail = "";
			setPassword = "";
		});
	};

	return (
		<div>
			<form>
				<label htmlFor="email">
					Email:
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="text"
						name="email"
						placeholder="Enter your Email"
					/>
				</label>
				<label htmlFor="password">
					Password:
					<input
						onChange={(e) => setPassword(e.target.value)}
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
