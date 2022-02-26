import {useReducer} from 'react'
import * as authService from "../../api/auth.service";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "setEmail":
			return { ...prevState, email: action.payload };
        case "setPassword":
            return {...prevState, password: action.payload}
		default:
			return prevState;
	}
};

const initialState = {
	email: "",
    password: "",
};

export default function Login() {
    const [state, dispatch] = useReducer(reducer, initialState);
	const { email, password } = state;

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await authService.register(email, password)
        .then(()=> {
            dispatch({ type: "setEmail", payload: " " })
            dispatch({ type: "setPassword", payload: " " })
        })
            .catch((err) =>  console.log(err))

		if (!res.status === 200) {
			alert(`Server Error Status Code: ${res.status}`);
		}
    }

    return (
        <div>
            <form>
                <label for="email">
                    Email: 
                    <input
						onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })}
						value={email}
						type="text"
						name="email"
						placeholder="Enter your Email"
					/>
                </label>
                <label for="password">
                    Register Your Password: 
                    <input
						onChange={(e) => dispatch({ type: "setPassword", payload: e.target.value })}
						value={password}
						type="text"
						name="password"
						placeholder="Register your password here!"
					/>
                </label>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}