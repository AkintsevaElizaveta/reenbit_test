import React, {useEffect} from "react";
import Context from "./context/Context";
import ContactApi from "./api/contacts/ContactApi";
import ContactList from "./components/contacts/ContactList";
import Chat from "./components/chats/Chat";
import ChatsApi from "./api/chats/ChatsApi";
import ContactHeader from "./components/contacts/ContactHeader";
import DateTimeHelper from "./utils/DateTimeHelper";
import ChuckNorris from "./api/chats/ChuckNorris";
import MessageInput from "./components/chats/MessageInput";
import NewMessageNotification from "./components/notifications/NewMessageNotification";

function App() {

    const [contacts, setContacts] = React.useState([]);
    const [messages, setMessages] = React.useState([]);
    const [selectedUser, setSelectedUser] = React.useState([]);
    const [isNotificationShown, setIsNotificationShown] = React.useState(false);

    useEffect(() => {
        ContactApi.getContacts()
            .then(items => {
                items.sort((a, b) => DateTimeHelper.fromJSON(a.lastMessageDate) < DateTimeHelper.fromJSON(b.lastMessageDate) ? 1 : -1)
                setContacts(items)
                setSelectedUser(items[0])
                ChatsApi.getMessages(items[0].id)
                    .then(messages => setMessages(messages))
            })

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

    function onSendMessage(text){
        if(text !== ""){
            const message = {
                fromUser: 0,
                toUser: selectedUser.id,
                messageText: text,
            };

            sendMessageAndUpdate(message)
                .then(() => setTimeout(() => addResponse(), 10000))
        }
    }

    function addResponse() {
        ChuckNorris.getMessages()
            .then(response => {
                const message = {
                    fromUser: selectedUser.id,
                    toUser: 0,
                    messageText: response.value,
                };

                sendMessageAndUpdate(message)
                    .then(() => setIsNotificationShown(true))
                    .then(() => setTimeout(closeNotification, 5000));
            })
    }

    function closeNotification() {
        setIsNotificationShown(false)
    }

    function sendMessageAndUpdate(message) {
        return ChatsApi.sendMessage(message)
            .then(() => ChatsApi.getMessages(selectedUser.id)
                .then(messages => setMessages(messages)))
            .then(() => ContactApi.getContacts()
                .then(contacts => {
                    contacts.sort((a, b) => DateTimeHelper.fromJSON(a.lastMessageDate) < DateTimeHelper.fromJSON(b.lastMessageDate) ? 1 : -1)
                    setContacts(contacts)
                }))
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
                    <Chat messages={messages} user={selectedUser} onSendMessage={onSendMessage}></Chat>
                </div>
                {isNotificationShown && <NewMessageNotification user={selectedUser} onClose={closeNotification}/>}
            </div>
        </Context.Provider>
    );
}

export default App;
