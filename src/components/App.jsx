import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import initialContacts from './contacts.json';

export class App extends Component {
  state = {
    //contacts: [],
    contacts: initialContacts,
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({name, number}) => {
    const { contacts } = this.state;
    const id = nanoid();
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      :
    this.setState(({ contacts }) => ({
      contacts: [{id, name, number}, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  render () {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

    return ( 
      <>
        <Section title={'Phonebook'}>
          <ContactForm
            onSubmit={this.addContact}
          />
        </Section>  
      
        <Section title="Contacts">
        <Filter onChange={this.changeFilter} value={filter} />
          <ContactList 
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact} 
          />
        </Section>
      </>
    );
  } 
}  
