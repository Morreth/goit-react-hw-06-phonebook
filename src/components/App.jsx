import React, { useState } from 'react'
import ContactForm from './Contacts/ContactsForm';
import ContactList from './Contacts/ContactList';
import  Filter  from './Contacts/FilterContacts';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
      setFilter(e.currentTarget.value );
   };
  
  const handleSubmit = obj => {
     
      const checkContact = contacts.find(
        contact => contact.name.toLowerCase() === obj.name.toLowerCase()
      );
      if (!checkContact) {
        setContacts( contacts => [...contacts, obj] );
        return;
      }
      alert(`${obj.name} is already in contacts `);
    }

    const deleteContact = id => {
      setContacts(contacts => contacts.filter(el => el.id !== id));
    }

    const visibileContacts = () => {
     
      const normalize = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalize)
      );
    };
   

      return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={handleSubmit} contacts={contacts} />
          <h2>Contacts</h2>
          <Filter filterName={changeFilter} value={filter} />
          <ContactList
            contacts={visibileContacts()}
            onDelete={deleteContact}
          />
        </div>
      );
    
};
export default App;