import { createSelector } from '@reduxjs/toolkit';

// селекторы всегда получают весь state

export const getLoading = state => state.phoneBook.loading;

export const getError = state => state.phoneBook.error;

export const getAllContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;

// мемоизация
// в createselector передаем те селекторы, от которых зависит мемоизированный селектор
// если с предыдущего allContacts и filtered не изменились, то фильтр не произойдет, а из кеша вернутся старые данные

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filtered) => {
    const normalizedFilter = filtered.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
