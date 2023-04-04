import {ContactListWrapper, ContactListEl, ContactListBtn} from "./ContactList.styled"
import { FcCellPhone } from "react-icons/fc";
import PropTypes from 'prop-types';


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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};