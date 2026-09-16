import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function MainSection() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
