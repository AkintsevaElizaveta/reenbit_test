import DateTimeHelper from "../../utils/DateTimeHelper";

function MessageItem({message, userPhoto, isUserMessage}){
    return(
        <li className={isUserMessage ? "chats__message_item chats__message_item_sent" : "chats__message_item chats__message_item_received"}>
            <div className="chats__message_item_text_box">
                {!isUserMessage && <img className="chats__user_logo" src={userPhoto}/>}
                <div className={isUserMessage ? "chats__message chats__message_sent" : "chats__message chats__message_received"}>{message.messageText}</div>
            </div>
            <span className={isUserMessage ? "chats__message_item_date chats__message_item_date_sent" : "chats__message_item_date chats__message_item_date_received"}>{DateTimeHelper.fromJSON(message.date)}</span>
        </li>


    )
 }

export default MessageItem;