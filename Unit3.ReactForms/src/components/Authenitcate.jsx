import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Authenitcate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);

    async function handleClick() {
        console.log("Clicked");
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            const result = await response.json();
            setSuccessMessage(result.message);

            if (result.data.username) {
                setUsername(result.data.username);
            }
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Authenitcate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            {username && (
                <p className="logged-in-msg">Logged in as: {username}</p>
            )}
            <button className="authenticate-btn" onClick={handleClick}>
                Authenticate Token
            </button>
        </div>
    );
}
