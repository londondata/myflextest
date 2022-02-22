import {useState} from 'react'
import * as authService from "../../api/auth.service";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        console.log("in handle submit")
        let loginUser = { email, password };
        console.log(loginUser)
        let res = await authService.login(loginUser)
            .then(() => {
                setEmail("");
                setPassword("");
            })
            .catch((err) =>  console.log(err))

		if (!res === 201) {
			alert(`Server Error Status Code: ${res.status}`);
		}
    }

    return (
        <div>
            <form>
                <label for="email">
                    Email: 
                    <input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="text"
						name="email"
						placeholder="Enter your Email"
					/>
                </label>
                <label for="password">
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
    )
}