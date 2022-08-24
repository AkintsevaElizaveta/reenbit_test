function ContactItem({index, contact}){
    return (
        <li className="contacts__item">
            <img src={`${contact.photo}`} className="contacts__photo"/>
            <span className="contacts__text_area">
                {`${contact.name} ${contact.lastName}`}
                <span className="contacts__message">Last message</span>
            </span>

            <span className="contacts__date">date</span>
        </li>
    )
}

export default ContactItem;