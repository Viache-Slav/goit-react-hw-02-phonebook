import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const contactNames = contacts.map((contact) => contact.name);
    const contactNumbers = contacts.map((contact) => contact.number);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    if (contactNumbers.includes(number)) {
      alert(`${number} is already in contacts`);
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

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
