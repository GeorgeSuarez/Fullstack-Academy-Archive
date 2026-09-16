import { useState } from "react";

/* TODO - add your code to create a functional React component that renders a login form */
export default function Login({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            if (!email || !password) {
                setErrorMsg("Please enter both email and password");
                return;
            }

            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            setToken(result.token);
            console.log(result);
            return result;
            
        } catch (error) {
            console.error("Login failed: ", error.message);
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input 
                placeholder="Email"
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {/* {token && <p>User token: {token}</p>} */}
        </div>
    )
}