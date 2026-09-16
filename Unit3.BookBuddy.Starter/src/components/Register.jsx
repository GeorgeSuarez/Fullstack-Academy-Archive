import { useState } from "react";

/* TODO - add your code to create a functional React component that renders a registration form */
export default function Register() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleRegisterUser(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        email,
                        password,
                    }),
                },
            );

            const registeredUserData = await response.json();
            console.log(registeredUserData);
            return registeredUserData;
        } catch (error) {
            setError(`Failed to register user: ${error.message}`);
            console.error(`Failed to register user: ${error.message}`);
        }
    }

    return (
        <div className="register-container">
            <h2>Register Form</h2>
            <br />
            <input
                placeholder="First Name"
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                placeholder="Last Name"
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button onClick={handleRegisterUser}>Register</button>
            {error && <p>{error}</p>}
        </div>
    );
}
