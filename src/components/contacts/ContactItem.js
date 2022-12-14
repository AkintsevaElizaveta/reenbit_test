import DateTimeHelper from "../../utils/DateTimeHelper";

function ContactItem({contact, onSelect, isUserOnline}){

    return (
        <li className="contacts__item" onClick={() => onSelect(contact.id)}>
            <div className={isUserOnline ? "contacts__photo_container" : "contacts__photo_container_isNotOnline" }>
                <img src={`${contact.photo}`} className="contacts__photo"/>
            </div>
            <span className="contacts__text_area">
                {`${contact.firstName} ${contact.lastName}`}
                <span className="contacts__message">{contact.lastMessage}</span>
            </span>

            <span className="chats__message_item_date">{DateTimeHelper.fromJSON(contact.lastMessageDate)}</span>
        </li>
    )
}

export default ContactItem;