import React, {useEffect} from "react";
import Context from "./context/Context";
import ContactApi from "./api/contacts/ContactApi";
import ContactList from "./components/contacts/ContactList";
import Chat from "./components/chats/Chat";
import chat from "./components/chats/Chat";

function App() {

    const [contacts, setContacts] = React.useState([]);
    const [chats, setChats] = React.useState('123')

    useEffect(() => {
        ContactApi.getContacts()
            .then(items => setContacts(items));

    }, [])

    function selectChat(usersId){
        setChats(usersId)
    }

    console.log(`chat: ${chats}`)

    return (
        <Context.Provider>
            <div className="wrapper">
                <div className="contacts">
                    <div className="contacts__search_bar">
                        <input className="contacts__search_field"/>
                    </div>
                    <h3 className="contacts__title">Chats</h3>
                    <ContactList contacts={contacts} onSelect={selectChat}></ContactList>
                </div>
                <div>
                    <Chat usersId={chats}></Chat>
                </div>
            </div>

        </Context.Provider>
    );
}

export default App;
