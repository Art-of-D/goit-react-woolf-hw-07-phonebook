export const handlerAllContacts = (state, { payload }) => {
  state.items = payload;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.error = error.message;
};

export const handleDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload);
};

export const handleAddContact = (state, { payload }) => {
  state.items = [...state.items, payload];
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
