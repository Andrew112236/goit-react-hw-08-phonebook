// Import Files from NPM plugins---------------------------------------------------------------------------------

import React from 'react';

// Import Files from components-----------------------------------------------------------------------------------

import { UserMenu } from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

// Import MUI Files-----------------------------------------------------------------------------------------------

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useAuth } from 'hooks';
import { styled } from '@mui/material/styles';

const AppBars = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

export const Bar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBars position="static">
      <Toolbar component="nav">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBars>
  );
};
