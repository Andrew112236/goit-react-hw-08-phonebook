import LoginForm from '../components/LoginForm/LoginForm';
import DocumentTitle from 'react-document-title';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#0408d9',
    },
  },
  typography: {
    button: {
      fontFamily: 'Arial',
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

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <DocumentTitle title="Login"></DocumentTitle>
      <LoginForm />
    </ThemeProvider>
  );
};

export default Login;
