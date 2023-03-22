import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {ContactList} from './ContactList/ContactList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      contacts: [],
    };
  }

//  Метод зміни значення у формі який буде рендеритись у імпуті
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

//   Пишемо метод, який викликаємо при сабміті форми
  handleSubmit = (e) => {
    e.preventDefault();
    // Створюємо наш контакт, який буде отримувати унікальний ID через nanoid
    const contact = {
      id: nanoid(),
      name: this.state.name,
    };
    // Змінюємо стейт, додавши наш новий контакт
    this.setState({
      contacts: [...this.state.contacts, contact],
      name: '',
    });
  };

  
//   Рендеримо цю історію
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {/* Прокидуємо проп з нашим новим стейтом і отримуємо список з лішками */}
        <ContactList contacts={this.state.contacts} />
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