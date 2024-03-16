import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  addContact,
  fetchContacts,
} from 'api/mockapi/contactAPI';

export const getContactsThunk = createAsyncThunk('getAllContacts', () => {
  try {
    return fetchContacts();
  } catch (e) {
    throw e;
  }
});

export const deleteContactThunk = createAsyncThunk('deleteContact', id => {
  try {
    deleteContact(id);
    return id;
  } catch (e) {
    throw e;
  }
});

export const addContactThunk = createAsyncThunk('addContact', async contact => {
  try {
    const {
      data: { id, createdAt, name, phone },
    } = await addContact(contact);
    return { id, createdAt, name, phone };
  } catch (e) {
    throw e;
  }
});
