import React from 'react';
import css from './contactList.module.css'

const icon = "📳";


const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map((contact) => (
      <div key={contact.id}>
      <span className={css.mobile-icon}>📳</span>
        <span className={css.name}>{`${contact.name}: `}</span>
        <span className={css.number}>{contact.number}</span>
        <button className={css.button} onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
        </div>
    ))}
  </>
);

export default ContactList;
