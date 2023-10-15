// Import utils---------------------------------------------------------------------------------------------------

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Import Files from components-----------------------------------------------------------------------------------

import { useAuth } from 'hooks/useAuth';
import Layout from '../components/Layout/Layout';
import Loader from '../components/Loader/Loader';

// Redux section--------------------------------------------------------------------------------------------------

import { refreshUser } from '../redux/auth/authOperations';

// Import Pages---------------------------------------------------------------------------------------------------

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));

//Use MUI Theme styles--------------------------------------------------------------------------------------------

const themeStyles = createTheme({
  typography: {
    button: {
      fontFamility: 'Arial',
    },
    h1: {
      fontFamility: 'Arial',
    },
    h2: {
      fontFamility: 'Arial',
    },
  },
  palette: {
    primary: {
      main: '#34a8eb',
    },
    secondary: {
      main: '#0408d9',
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

//Create Public Routing--------------------------------------------------------------------------------------------

function PublicRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={'/contacts'} />;
}

//Create Private Routing--------------------------------------------------------------------------------------------

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={'/login'} />;
}

// App function------------------------------------------------------------------------------------------------------

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeStyles}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
