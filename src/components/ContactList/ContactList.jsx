
export const ContactList = ({ contacts }) => {
    return (
      <ul>
        {/* Мапимо наш проп */}
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
      </ul>
    );
  };