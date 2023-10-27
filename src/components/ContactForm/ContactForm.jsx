import React, { Component } from 'react';
import css from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.onSubmit(name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
        <div className={css.container}>
            <h2>Name</h2>
            <form className={css.form} onSubmit={this.handleSubmit}>
                <input className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
                value={name}
                onChange={this.handleChange}
                />
                <button className={css.button} type="submit">
                  Add contact
                </button>
            </form>
        </div>    
    );
  }
}

export default ContactForm;
