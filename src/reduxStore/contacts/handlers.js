export const handlerAllContacts = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload);
};

export const handleAddContact = (state, { payload }) => {
  state.items = [...state.items, payload];
};
