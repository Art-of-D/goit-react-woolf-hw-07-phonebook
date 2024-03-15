import { Filter } from './Phonebook/Filter/Filter';
import { Section } from './Phonebook/Section/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'reduxStore/contacts/selectors';
import { getContactsThunk } from 'reduxStore/contacts/thunks';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, []);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </>
  );
};
