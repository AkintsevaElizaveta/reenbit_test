import ChatsHeader from "./ChatsHeader";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";

function Chat({messages, user, onSendMessage, isUserOnline}){

    return(
        <div className="chats__messages_area">
            <ChatsHeader user={user} isUserOnline={user.isOnline} className="chats__header"/>
            <ul className="chats__messages_list" id="scroll">
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