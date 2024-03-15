import axios from 'axios';

axios.defaults.baseURL = 'https://65f449aaf54db27bc0214d05.mockapi.io/contacts';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/', {
      headers: { 'content-type': 'application/json' },
    });
    return data;
  } catch (e) {
    throw e;
  }
};

export const deleteContact = async id => {
  try {
    await axios.delete(`/${id}`);
  } catch (e) {
    throw e;
  }
};

export const addContact = async ({ name, phone }) => {
  try {
    const resp = await axios.post('', {
      headers: { 'content-type': 'application/json' },
      name,
      phone,
    });
    return resp;
  } catch (e) {
    throw e;
  }
};
