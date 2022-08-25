import React, {useEffect} from "react";
import Context from "./context/Context";
import ContactApi from "./api/contacts/ContactApi";
import ContactList from "./components/contacts/ContactList";
import Chat from "./components/chats/Chat";
import ChatsApi from "./api/chats/ChatsApi";
import chat from "./components/chats/Chat";

function App() {

    const [contacts, setContacts] = React.useState([]);
    const [messages, setMessages] = React.useState([]);
    const [selectedUser, setSelectedUser] = React.useState(null);

    useEffect(() => {
        ContactApi.getContacts()
            .then(items => setContacts(items));

    }, [])

    function selectChat(usersId){
        const user = contacts.find(u => u.id === usersId);
        setSelectedUser(user);

        ChatsApi.getMessages(usersId)
            .then(messages => setMessages(messages))
    }

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
                <div className="chats">
                    <Chat messages={messages} user={selectedUser}></Chat>
                </div>
            </div>

        </Context.Provider>
    );
}

export default App;
