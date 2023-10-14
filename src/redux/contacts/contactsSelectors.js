// Selectors

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// Return visible contacts

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
      .sort((i, j) => i.name.localeCompare(j.name));
  }
);
