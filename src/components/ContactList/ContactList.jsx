import React from 'react';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}
        </li>
    ))}
  </ul>
);

export default ContactList;