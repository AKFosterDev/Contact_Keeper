import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <h1>Contacts Component</h1>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
