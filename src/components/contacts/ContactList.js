import ContactItem from "./ContactItem";

function ContactList({contacts}){
    return (
        <ul>
            {
                contacts.map((contact, index) => {
                    return <ContactItem index={index} contact={contact}></ContactItem>
                })
            }
        </ul>
    )
}

export default ContactList;