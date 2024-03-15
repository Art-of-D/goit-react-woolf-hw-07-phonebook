import {
  PhonebookList,
  PhonebookListElements,
  PhonebookDeleteButton,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'reduxStore/contacts/selectors';
import { deleteContactThunk } from 'reduxStore/contacts/thunks';
import { getFilter } from 'reduxStore/filter/selectors';

export const ContactList = () => {
  const { filter } = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const list = filter.length > 0 ? filterContacts() : contacts;

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <PhonebookList>
      {list.map(({ id, name, phone }) => {
        return (
          <PhonebookListElements key={id}>
            {name}: {phone}
            <PhonebookDeleteButton onClick={() => handleDeleteContact(id)}>
              Delete
            </PhonebookDeleteButton>
          </PhonebookListElements>
        );
      })}
    </PhonebookList>
  );
};
