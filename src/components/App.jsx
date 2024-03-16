import { Filter } from './Phonebook/Filter/Filter';
import { Section } from './Phonebook/Section/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'reduxStore/contacts/selectors';
import { getContactsThunk } from 'reduxStore/contacts/thunks';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);
  const load = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {load && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </>
  );
};
