import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const createAuthentificationSlice = operation => ({
  pending: state => {
    state.isAuthLoading = operation;
  },
  fulfilled: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isAuthLoading = false;
    state.authError = null;
  },
  rejected: (state, action) => {
    state.isAuthLoading = false;
    state.authError = action.payload;
  },
});

//Pending, fullfilled,rejected - REGISTER section------------------------------------------------------------------------------

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
    authError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, createAuthentificationSlice('register'))
      .addCase(register.fulfilled, createAuthentificationSlice('register'))
      .addCase(register.rejected, createAuthentificationSlice('register'));
  },
});

//Pending, fullfilled,rejected - LOGIN section------------------------------------------------------------------------------

const logInSlice = createSlice({
  name: 'login',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
    authError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logIn.pending, createAuthentificationSlice('login'))
      .addCase(logIn.fulfilled, createAuthentificationSlice('login'))
      .addCase(logIn.rejected, createAuthentificationSlice('login'));
  },
});

//Pending, fullfilled,rejected - LOGOUT section------------------------------------------------------------------------------

const logOutSlice = createSlice({
  name: 'logout',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
    authError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, createAuthentificationSlice('logout'))
      .addCase(logOut.fulfilled, createAuthentificationSlice('logout'));
  },
});

//Pending, fullfilled,rejected - REFRESH section------------------------------------------------------------------------------

const refreshUserSlice = createSlice({
  name: 'refresh',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
    authError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(refreshUser.pending, createAuthentificationSlice('refresh'))
      .addCase(refreshUser.fulfilled, createAuthentificationSlice('refresh'))
      .addCase(refreshUser.rejected, createAuthentificationSlice('refresh'));
  },
});

const rootReducer = combineReducers({
  register: registerSlice.reducer,
  login: logInSlice.reducer,
  logout: logOutSlice.reducer,
  refresh: refreshUserSlice.reducer,
});

export const authSliceReducer = rootReducer;
