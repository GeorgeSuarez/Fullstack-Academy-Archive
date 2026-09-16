import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Navigations from "./components/Navigations";
import Books from "./components/Books";
import Login from "./components/Login";
import Account from "./components/Account";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register";

function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <h1>
                <img id="logo-image" src={bookLogo} />
                Library App
            </h1>
            <div id="container">
                <Navigations />
                <Routes>
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:id" element={<SingleBook />}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/account" element={<Account token={token} />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
