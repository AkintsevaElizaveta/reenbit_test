function ContactItem({contact, onSelect}){
    return (
        <li className="contacts__item" onClick={() => onSelect(contact.id)}>
            <div className="contacts__photo_container">
                <img src={`${contact.photo}`} className="contacts__photo"/>
            </div>
            <span className="contacts__text_area">
                {`${contact.name} ${contact.lastName}`}
                <span className="contacts__message">Last message</span>
            </span>

            <span className="contacts__date">date</span>
        </li>
    )
}

export default ContactItem;