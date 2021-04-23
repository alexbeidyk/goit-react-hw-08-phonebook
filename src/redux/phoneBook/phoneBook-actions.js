import { createAction } from '@reduxjs/toolkit';

// экшены добавления контакта
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// экшены удаления контакта
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// єкшены получения контактов с бекенда
export const getContactRequest = createAction('contacts/getContactRequest');
export const getContactSuccess = createAction('contacts/getContactSuccess');
export const getContactError = createAction('contacts/getContactError');

// экшен фильтра
export const filterContact = createAction('contacts/filter');
