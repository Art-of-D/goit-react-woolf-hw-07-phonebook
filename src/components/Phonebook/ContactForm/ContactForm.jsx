import { useState } from 'react';
import { PhonebookForm, PhonebookInputButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'reduxStore/contacts/selectors';
import { addContactThunk } from 'reduxStore/contacts/thunks';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkContacts = newName => {
    if (
      contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase())
    ) {
      alert(`${newName} is already in contacts`);
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkContacts(name)) {
      dispatch(addContactThunk({ name, phone }));
      setName('');
      setNumber('');
    }
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone-number">Number:</label>
      <input
        type="tel"
        name="number"
        id="phone-number"
        value={phone}
        onChange={e => setNumber(e.target.value)}
        pattern="^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[\s\-]?\d{1,18}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example +380(123)4321212"
        required
      />
      <PhonebookInputButton
        type="submit"
        value="Add contact"
      ></PhonebookInputButton>
    </PhonebookForm>
  );
};
