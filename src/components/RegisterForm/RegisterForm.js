// Import Files from NPM plugins---------------------------------------------------------------------------------

import React from 'react';
import { Notify } from 'notiflix';

// Import Files from components-----------------------------------------------------------------------------------

import Loader from '../Loader/Loader';

// Import Redux files---------------------------------------------------------------------------------------------

import { register } from '../../redux/auth/authOperations';
import { selectIsAuthLoading } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Import MUI Files-----------------------------------------------------------------------------------------------

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

// Function RegisterForm------------------------------------------------------------------------------------------

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authOperation = useSelector(selectIsAuthLoading);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      )
        .unwrap()
        .then(() => {
          form.reset();
          Notify.success('Congratulations, you have successfully registered!');
          navigate('/');
        });
    } catch (error) {
      Notify.failure('User already exists');
    }
  };

  return (
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
        <Typography component="h1" variant="h4" fontFamily="Arial">
          Register - Insert your credentials
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ mt: 2 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={20}>
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
            {authOperation === 'register' ? <Loader /> : <>Sign Up</>}
          </Button>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Link
                component="button"
                variant="button"
                onClick={() => navigate('/login')}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterForm;
