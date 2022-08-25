import ChatsHeader from "./ChatsHeader";
import MessageItem from "./MessageItem";

function Chat({messages, user}){
    return(
        <div className="chats__messages_area">
            <ChatsHeader user={user} className="chats__header"/>
            <ul className="chats__messages_list">
                {
                    messages.map((message) => {
                        return <MessageItem message={message} userPhoto={user.photo}></MessageItem>
                    })
                }
            </ul>
        </div>
    )
}

export default Chat;