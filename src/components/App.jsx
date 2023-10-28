import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Andriy Shevchenko', number: '645-17-79' },
      { id: 'id-2', name: 'Vitali Klitschko', number: '658-25-63' },
      { id: 'id-3', name: 'Volodymyr Zelensky', number: '698-45-75' },
      { id: 'id-4', name: 'Vasyl Virastyuk', number: '158-35-61' },
    ],
    name: '',
    number: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => {
      return contact.name;
    });

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
