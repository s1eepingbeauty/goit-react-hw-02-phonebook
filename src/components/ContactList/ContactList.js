const ContactListItem = ({ id, name, number, onDelete }) => {
    return (
        <li>
            {name}: {number} <button onClick={() => onDelete(id)}>X</button>
        </li>
    )
};

const ContactList = ({ contacts, onDelete }) => {
    if (contacts.length === 0) return null;
    return (
        <ul>
            {contacts.map(contact => (
                <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
            ))}
        </ul>
    )
};

export default ContactList;