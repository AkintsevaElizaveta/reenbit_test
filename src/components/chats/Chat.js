import ChatsHeader from "./ChatsHeader";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";

function Chat({messages, user, onSendMessage}){
    return(
        <div className="chats__messages_area">
            <ChatsHeader user={user} className="chats__header"/>
            <ul className="chats__messages_list">
                {
                    messages.map((message) => {
                        return <MessageItem message={message} userPhoto={user.photo} isUserMessage={message.toUser === user.id}></MessageItem>
                    })
                }
            </ul>
            <MessageInput onSendMessage={onSendMessage}/>
        </div>
    )
}

export default Chat;