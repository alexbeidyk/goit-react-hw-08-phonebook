import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './phoneBook-actions';

// ОПЕРАЦИЯ ВСЕГДА ИСПОЛЬЗУЕТ ТРИ ЭКШЕНА - REQUEST,SUCCESS,ERROR

// axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export const getContact = () => dispatch => {
  dispatch(getContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error.message)));
};
