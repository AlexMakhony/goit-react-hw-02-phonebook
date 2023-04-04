import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import {PhoneWrapper} from './App.styled'
import PropTypes from 'prop-types';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
  const { contacts } = this.state;
  const isContactExists = contacts.some(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase() || 
               contact.number === newContact.number
  );

  if (isContactExists) {
    alert('This contact already exists in the phonebook!');
    return;
  }

  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
};

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };


  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <PhoneWrapper>
        <h1>Телефонна книга</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Контакти</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </PhoneWrapper>
    );
  }
}


App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  addContact: PropTypes.func,
  handleFilterChange: PropTypes.func,
  deleteContact: PropTypes.func,
};























// // import React from 'react';
// import ContactList from './ContactList';
// import { nanoid } from 'nanoid';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       contacts: [],
//       name: '',
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//     };
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, contact],
//       name: '',
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               value={this.state.name}
//               onChange={this.handleNameChange}
//               required
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//         <h2>Contacts</h2>
//         <ContactList contacts={this.state.contacts} />
//       </div>
//     );
//   }
// }

// export default App;