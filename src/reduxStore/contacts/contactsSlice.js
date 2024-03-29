import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  addContactThunk,
  getContactsThunk,
} from './thunks';
import {
  handleAddContact,
  handleDeleteContact,
  handlerAllContacts,
  handleFulfilled,
} from './handlers';
import { handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handlerAllContacts)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
