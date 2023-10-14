import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperation';

const createContactsSlice = operation => ({
  pending: state => {
    state.isLoading = operation;
  },
  fulfilled: (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
  },
  rejected: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // Pending, fulfilled, rejected - FETCH section-----------------------------------------------------------------------------

      .addCase(fetchContacts.pending, createContactsSlice('fetch'))
      .addCase(fetchContacts.fulfilled, createContactsSlice('fetch'))
      .addCase(fetchContacts.rejected, createContactsSlice('fetch'))

      // Pending, fulfilled, rejected - ADD section-------------------------------------------------------------------------------

      .addCase(addContact.pending, createContactsSlice('add'))
      .addCase(addContact.fulfilled, createContactsSlice('add'))
      .addCase(addContact.rejected, createContactsSlice('add'))

      // Pending, fulfilled, rejected - DELETE section----------------------------------------------------------------------------

      .addCase(deleteContact.pending, createContactsSlice('delete'))
      .addCase(deleteContact.fulfilled, createContactsSlice('delete'))
      .addCase(deleteContact.rejected, createContactsSlice('delete'))

      // Pending, fulfilled, rejected - UPDATE section----------------------------------------------------------------------------

      .addCase(updateContact.pending, createContactsSlice('update'))
      .addCase(updateContact.fulfilled, createContactsSlice('update'))
      .addCase(updateContact.rejected, createContactsSlice('update'));
  },
});

export const contactReducer = contactsSlice.reducer;
