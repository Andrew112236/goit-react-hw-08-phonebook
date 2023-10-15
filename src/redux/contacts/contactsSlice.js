import { createSlice, combineReducers } from '@reduxjs/toolkit';
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

//Pending, fullfilled,rejected - FETCH section------------------------------------------------------------------------------

const fetchContactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, createContactsSlice('fetch'))
      .addCase(fetchContacts.fulfilled, createContactsSlice('fetch'))
      .addCase(fetchContacts.rejected, createContactsSlice('fetch'));
  },
});

//Pending, fullfilled,rejected - ADD section------------------------------------------------------------------------------

const addContactSlice = createSlice({
  name: 'addContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addContact.pending, createContactsSlice('add'))
      .addCase(addContact.fulfilled, createContactsSlice('add'))
      .addCase(addContact.rejected, createContactsSlice('add'));
  },
});

//Pending, fullfilled,rejected - DELETE section------------------------------------------------------------------------------

const deleteContactSlice = createSlice({
  name: 'deleteContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteContact.pending, createContactsSlice('delete'))
      .addCase(deleteContact.fulfilled, createContactsSlice('delete'))
      .addCase(deleteContact.rejected, createContactsSlice('delete'));
  },
});

//Pending, fullfilled,rejected - UPDATE section------------------------------------------------------------------------------

const updateContactSlice = createSlice({
  name: 'updateContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateContact.pending, createContactsSlice('update'))
      .addCase(updateContact.fulfilled, createContactsSlice('update'))
      .addCase(updateContact.rejected, createContactsSlice('update'));
  },
});

const rootReducer = combineReducers({
  fetchContacts: fetchContactsSlice.reducer,
  addContacts: addContactSlice.reducer,
  deleteContacts: deleteContactSlice.reducer,
  updateContacts: updateContactSlice.reducer,
});

export const contactReducer = rootReducer;
