import React, {useEffect} from "react";
import Context from "./context/Context";
import ContactApi from "./api/contacts/ContactApi";
import ContactList from "./components/contacts/ContactList";

function App() {

    const [contacts, setContacts] = React.useState([]);

    useEffect(() => {
        ContactApi.getContacts()
            .then(items => setContacts(items));

    }, [])

    return (
        <Context.Provider>
            <div className="">
                <ContactList contacts={contacts}></ContactList>
            </div>
        </Context.Provider>
    );
}

export default App;
