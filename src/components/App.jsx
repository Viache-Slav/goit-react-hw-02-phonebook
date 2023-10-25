import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Andriy Shevchenko' },
      { id: 'id-2', name: 'Vitali Klitschko' },
      { id: 'id-3', name: 'Volodymyr Zelensky' },
      { id: 'id-4', name: 'Vasyl Virastyuk' },
      { id: 'id-5', name: 'Viaczeslav Fedko' },
    ],
    name: '',
  };

  handleAddContact = (name) => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
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
