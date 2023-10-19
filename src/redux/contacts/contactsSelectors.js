import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.filter;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
