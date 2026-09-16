import { useState } from "react";
import "./App.css";
import Authenitcate from "./components/Authenitcate";
import SignUpForm from "./components/SignUpForm";

function App() {
    const [token, setToken] = useState(null);
    return (
        <>
            <SignUpForm token={token} setToken={setToken} />
            <Authenitcate token={token} setToken={setToken} />
        </>
    );
}

export default App;
