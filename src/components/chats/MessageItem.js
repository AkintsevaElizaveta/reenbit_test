function MessageItem({message, userPhoto}){
    return(
        <li className={message.isUsersMessage ? "chats__message_item chats__message_item_sent" : "chats__message_item chats__message_item_received"}>
            <div className="chats__message_item_text_box">
                {!message.isUsersMessage && <img className="chats__user_logo" src={userPhoto}/>}
                <p className={message.isUsersMessage ? "chats__message chats__message_sent" : "chats__message chats__message_received"}>{message.message}</p>
            </div>
            <span className={message.isUsersMessage ? "chats__message_item_sent_date" : "chats__message_item_received_date"}>{message.date}</span>
        </li>


    )
 }

export default MessageItem;