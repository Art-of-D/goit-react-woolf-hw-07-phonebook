import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  addContact,
  fetchContacts,
} from 'api/mockapi/contactAPI';

export const getContactsThunk = createAsyncThunk('getAllContacts', () =>
  fetchContacts()
);

export const deleteContactThunk = createAsyncThunk('deleteContact', id => {
  deleteContact(id);
  return id;
});

export const addContactThunk = createAsyncThunk('addContact', async contact => {
  const {
    data: { id, createdAt, name, phone },
  } = await addContact(contact);
  return { id, createdAt, name, phone };
});
