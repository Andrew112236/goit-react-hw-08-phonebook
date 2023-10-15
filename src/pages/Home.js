import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { styled } from '@mui/material/styles';

const MainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

function getTimeOfDay() {
  const currentTime = new Date().getHours();

  let message = '';
  let style = {};

  if (currentTime >= 0 && currentTime < 12) {
    message = 'Good Morning!';
    style = { color: '#0408d9' };
  } else if (currentTime >= 12 && currentTime < 17) {
    message = 'Good Afternoon!';
    style = { color: '#0408d9' };
  } else {
    message = 'Good Evening!';
    style = { color: '#0408d9' };
  }

  return <span style={style}>{message}</span>;
}

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

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleStart = () => {
    isLoggedIn ? navigate('/contacts') : navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <DocumentTitle title="Home"></DocumentTitle>
      <MainBox component="main">
        <Typography
          sx={{
            mb: 1,
            fontSize: {
              xs: '20px',
              sm: '30px',
              md: '42px',
            },
          }}
          variant="h1"
          fontWeight="700"
          fontFamily="Arial"
          color="#1976d2"
          maxWidth="600px"
          margin="auto"
          marginTop="20px"
        >
          {getTimeOfDay()}
        </Typography>
        <Typography
          sx={{
            mb: {
              xs: 2.5,
              sm: 3,
              md: 6,
            },
            fontSize: {
              xs: '20px',
              sm: '30px',
              md: '42px',
            },
          }}
          variant="h1"
          fontWeight="700"
          fontFamily="Arial"
          color="#ffffff"
          maxWidth="480px"
          margin="auto"
        >
          PhoneBook
        </Typography>
        <Button
          type="button"
          variant="contained"
          aria-label="Start"
          size="large"
          color="secondary"
          margin="auto"
          endIcon={<LoginIcon />}
          onClick={handleStart}
        >
          Go to Login
        </Button>
      </MainBox>
    </ThemeProvider>
  );
};

export default Home;
