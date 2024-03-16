import axios from 'axios';

axios.defaults.baseURL = 'https://65f449aaf54db27bc0214d05.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get('/');
  return data;
};

export const deleteContact = async id => {
  const resp = await axios.delete(`/${id}`);
  return resp;
};

export const addContact = async ({ name, phone }) => {
  const resp = await axios.post('', { name, phone });
  return resp;
};
