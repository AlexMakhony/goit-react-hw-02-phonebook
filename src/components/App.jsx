import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {ContactList} from './ContactList/ContactList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      contacts: [],
    //   Додаємо ключ номеру
      number: '',
    };
  }

//  ШАГ 1: Метод зміни значення у формі який буде рендеритись у імпуті
//  ШАГ 2: змінюємо наш метод, аби корректувати СТЕЙТ не тільки імені
   handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

//   Пишемо метод, який викликаємо при сабміті форми
  handleSubmit = (e) => {
    e.preventDefault();
    // ШАГ 1: Створюємо наш контакт, який буде отримувати унікальний ID через nanoid
    // ШАГ 2: Додаємо мошливість змінювати сабміт форми впливаючи на №терефону
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  
//  ШАГ1: Рендеримо цю історію
//  ЩАШ2: перероблюємо наш рендер, додавши інпут №телефону згідно ТЗ
render() {
    const { contacts, name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}


























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