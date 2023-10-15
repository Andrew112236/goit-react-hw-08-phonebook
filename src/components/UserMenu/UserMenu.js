// Import Files from NPM plugins---------------------------------------------------------------------------------

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Files from components-----------------------------------------------------------------------------------

import Loader from '../Loader/Loader';

// Import Redux files---------------------------------------------------------------------------------------------

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/authOperations';
import { selectIsAuthLoading } from 'redux/auth/authSelectors';

// Import MUI Files-----------------------------------------------------------------------------------------------

import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LogoutButton = styled(Button)`
  font-size: 14px;
  padding: 5px 20px;
  margin-top: 30px;
`;

const Title = styled('p')`
  margin-left: auto;
  margin-right: 5px;
  margin-top: 20px;
  color: #003eaa;
  font-size: 18px;
  text-transform: uppercase;
`;
export const UserMenu = () => {
  const user = useAuth();
  const dispatch = useDispatch();
  const authentOperation = useSelector(selectIsAuthLoading);

  return (
    <>
      <Title>{user.name}</Title>
      <LogoutButton
        variant="contained"
        aria-label="Start"
        size="large"
        color="primary"
        type="button"
        onClick={() => dispatch(logOut())}
        endIcon={authentOperation === 'logout' ? <Loader /> : <LogoutIcon />}
      >
        Logout
      </LogoutButton>
    </>
  );
};
