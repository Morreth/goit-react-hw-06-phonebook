import React from 'react'
import ContactForm from './Contacts/ContactsForm';
import ContactList from './Contacts/ContactList';
import  Filter  from './Contacts/FilterContacts';


const App = () => {

      return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      );
   
};
export default App;