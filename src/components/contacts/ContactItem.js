function ContactItem({index, contact}){
    return (
        <li>
            <span>{`${contact.name} ${contact.lastName}`}</span>
        </li>
    )
}

export default ContactItem;