import React, {useEffect} from "react";
import Context from "./context/Context";
import ContactApi from "./api/contacts/ContactApi";
import ContactList from "./components/contacts/ContactList";
import Chat from "./components/chats/Chat";
import ChatsApi from "./api/chats/ChatsApi";
import ContactHeader from "./components/contacts/ContactHeader";

function App() {

    const [contacts, setContacts] = React.useState([]);
    const [messages, setMessages] = React.useState([]);
    const [selectedUser, setSelectedUser] = React.useState([]);

    useEffect(() => {
        ContactApi.getContacts()
            .then(items => {
                setContacts(items)
                setSelectedUser(items[0])
                ChatsApi.getMessages(items[0].id)
                    .then(messages => setMessages(messages))
            })
            // .then(() => selectChat(contacts[0].id))

    }, [])

    function selectChat(usersId){
        const user = contacts.find(u => u.id === usersId);
        setSelectedUser(user);

        ChatsApi.getMessages(usersId)
            .then(messages => setMessages(messages))
    }

    function onSearch(searchText){
        searchText = searchText.toLowerCase()
        ContactApi.getContacts()
            .then(contacts => contacts.filter(res => res.firstName.toLowerCase().includes(searchText) || res.lastName.toLowerCase().includes(searchText)))
            .then(items => {
                setContacts(items)
            });
    }

    return (
        <Context.Provider>
            <div className="wrapper">
                <div className="contacts">
                    <ContactHeader onSearch={onSearch}/>
                    <h3 className="contacts__title">Chats</h3>
                    <ContactList contacts={contacts} onSelect={selectChat}></ContactList>
                </div>
                <div className="chats">
                    <Chat messages={messages} user={selectedUser}></Chat>
                </div>
                {/*<div className="chats__send_block"></div>*/}
            </div>

        </Context.Provider>
    );
}

export default App;
