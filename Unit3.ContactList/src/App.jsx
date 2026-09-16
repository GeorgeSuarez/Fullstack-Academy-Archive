import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);
    return (
        <>
            <div>
                {selectedContactId ? (
                    <SelectedContact
                        selectedContactId={selectedContactId}
                        setSelectedContactId={setSelectedContactId}
                    />
                ) : (
                    <ContactList setSelectedContactId={setSelectedContactId} />
                )}
            </div>
        </>
    );
}

export default App;
