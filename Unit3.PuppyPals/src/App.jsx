import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
    const [puppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);

    const featuredPup = puppies.find((pup) => pup.id === featPupId);

    console.log("puppyList: ", puppies);
    return (
        <>
            <div className="App">
                {puppies.map((puppy) => {
                    return (
                        <p
                            className="puppy-list"
                            onClick={() => {
                                setFeatPupId(puppy.id);
                            }}
                            key={puppy.id}
                        >
                            {puppy.name}
                        </p>
                    );
                })}
                {featPupId && (
                    <div className="featured-pup">
                        <h1>Featured Pup</h1>
                        <h2>{featuredPup.name}</h2>
                        <ul>
                            <li>Age: {featuredPup.age}</li>
                            <li>Email: {featuredPup.email}</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
