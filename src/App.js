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
            <div className="wrapper">
                <div className="contacts">
                    <div className="contacts__search_bar">
                        <input className="contacts__search_field"/>
                    </div>
                    <h3 className="contacts__title">Chats</h3>
                    <ContactList contacts={contacts}></ContactList>
                </div>
                <div>Chat</div>
            </div>

        </Context.Provider>
    );
}

export default App;
