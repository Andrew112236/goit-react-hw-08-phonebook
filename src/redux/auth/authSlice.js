import { login, logout, refresh, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

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

// Initial state--------------------------------------------------------------------------------------------------------------------

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,

  isAuthLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'authentificator',
  initialState,
  extraReducers: builder => {
    builder
      //Pending, fullfilled,rejected - REGISTER section------------------------------------------------------------------------------

      .addCase(register.pending, createAuthentificationSlice('register'))
      .addCase(register.fulfilled, createAuthentificationSlice('register'))
      .addCase(register.rejected, createAuthentificationSlice('register'))

      //Pending, fullfilled,rejected - LOGIN section------------------------------------------------------------------------------

      .addCase(login.pending, createAuthentificationSlice('login'))
      .addCase(login.fulfilled, createAuthentificationSlice('login'))
      .addCase(login.rejected, createAuthentificationSlice('login'))

      //Pending, fullfilled,rejected - LOGOUT section------------------------------------------------------------------------------

      .addCase(logout.pending, createAuthentificationSlice('logout'))
      .addCase(logout.fulfilled, createAuthentificationSlice('logout'))

      //Pending, fullfilled,rejected - REFRESH section------------------------------------------------------------------------------

      .addCase(refresh.pending, createAuthentificationSlice('refresh'))
      .addCase(refresh.fulfilled, createAuthentificationSlice('refresh'))
      .addCase(refresh.rejected, createAuthentificationSlice('refresh'));
  },
});

export const authSliceReducer = authSlice.reducer;
