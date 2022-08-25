
import MessageItem from "./MessageItem";

function Chat({messages, user}){
    return(
        <div className="chats__messages_area">
            <div className="chats__header">
            </div>
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