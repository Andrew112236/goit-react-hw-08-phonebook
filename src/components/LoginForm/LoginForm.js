// Import Files from NPM plugins---------------------------------------------------------------------------------

import React from 'react';
import { Notify } from 'notiflix';

// Import Files from components-----------------------------------------------------------------------------------

import { Loader } from '../Loader/Loader';

// Import Redux files---------------------------------------------------------------------------------------------

import { register } from '../../redux/auth/authSlice';
import { selectIsAuthLoading } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Import MUI Files-----------------------------------------------------------------------------------------------

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BlockIcon from '@mui/icons-material/Block';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '@mui/icons-material';

// Function LoginForm------------------------------------------------------------------------------------------

const defaultTheme = createTheme();

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authOperation = useSelector(selectIsAuthLoading);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await dispatch(
        Login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      )
        .unwrap()
        .then(() => {
          form.reset();
          Notify.success(`Welcome, ${form.elements.email.value}!`);
          navigate('/');
        });
    } catch (error) {
      Notify.failure('Login failed. Please enter the correct password!');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, variant: 'circular' }}>
            <BlockIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            fontFamily="Arial"
          ></Typography>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={14}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={14}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={14}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              {authOperation === 'register' ? <Loader /> : <>Sign In</>}
            </Button>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Link
                  component="button"
                  variant="button"
                  onClick={() => navigate('/register')}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
