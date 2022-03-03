import {useReducer, useEffect} from 'react'
import * as authService from "../../api/auth.service";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "setEmail":
			return { ...prevState, email: action.payload };
        case "setPassword":
            return {...prevState, password: action.payload}
        case "setSuccess":
            return {...prevState, successMsg: "Successful Registration! Please Login now."}
		default:
			return prevState;
	}
};

const initialState = {
	email: "",
    password: "",
    successMsg: ""
};

export default function Register({checkUserActive}) {
    const [state, dispatch] = useReducer(reducer, initialState);
	const { email, password, successMsg } = state;

    useEffect(()=> {
        checkUserActive()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        await authService.register(email, password)
           
        dispatch({ type: "setEmail", payload: " " })
        dispatch({ type: "setPassword", payload: " " }) 
        dispatch({ type: "setSuccess"}) 
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
                <h1 style={{color: "green"}}>{successMsg}</h1>
            </form>
        </div>
    )
}