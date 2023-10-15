// Import Files from NPM plugins---------------------------------------------------------------------------------

import React from 'react';

// Import Files from components-----------------------------------------------------------------------------------

import Loader from '../Loader/Loader';

// Import Redux files---------------------------------------------------------------------------------------------

import { logIn } from '../../redux/auth/authOperations';
import { selectIsAuthLoading } from '../../redux/auth/authSelectors';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Function LoginForm------------------------------------------------------------------------------------------

const defaultTheme = createTheme();

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authOperation = useSelector(selectIsAuthLoading);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      form.reset();
      navigate('/');
    } catch (error) {
      form.elements.password.setCustomValidity(
        'Login failed. Please enter the correct password!'
      );
      form.reportValidity();
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
          <Typography component="h1" variant="h4" sx={{ fontFamily: 'Arial' }}>
            Login - Insert your credentials
          </Typography>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={6}>
              <Grid item xs={20}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoComplete="email"
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

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained">
              {authOperation === 'logIn' ? <Loader /> : <>Sign In</>}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate('/register')}
                >
                  {"Don't have a free account yet? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
