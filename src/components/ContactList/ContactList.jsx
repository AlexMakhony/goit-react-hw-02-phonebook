import {ContactListWrapper, ContactListEl, ContactListBtn} from "./ContactList.styled"
import { FcCellPhone } from "react-icons/fc";

export const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = (id) => {
    onDeleteContact(id);
  };

  return (
    <ContactListWrapper>
      {/* Мапим наш проп */}
      {contacts.map((contact) => (
        <ContactListEl key={contact.id}>
          <FcCellPhone />
          {contact.name}: {contact.number}
          <ContactListBtn onClick={() => handleDeleteContact(contact.id)}>Delete</ContactListBtn>
        </ContactListEl>
      ))}
    </ContactListWrapper>
  );
};