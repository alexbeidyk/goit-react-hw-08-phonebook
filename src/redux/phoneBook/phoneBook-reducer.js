import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  filterContact,
} from './phoneBook-actions';
// import { deleteContact } from './phoneBook-operations';

// редюсер на тулкит
const contacts = createReducer([], {
  // добавляем в редюсер только  Success
  // получение сохраненных контактов с бекенда
  [getContactSuccess]: (state, { payload }) => payload,
  // добавление
  [addContactSuccess]: (state, { payload }) =>
    state.find(
      ({ name, number }) => name === payload.name || number === payload.number,
    )
      ? alert('This subscriber is already in contacts')
      : [...state, payload],

  // удаление
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// фильтр
const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [getContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [deleteContactRequest]: () => null,
  [getContactRequest]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
