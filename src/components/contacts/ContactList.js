import ContactItem from "./ContactItem";


function ContactList({contacts, onSelect}){

    return (
        <ul className="contacts__list">
            {
                contacts.map((contact, index) => {
                    return <ContactItem contact={contact} onSelect={onSelect}></ContactItem>
                })
            }
        </ul>
    )
}

export default ContactList;