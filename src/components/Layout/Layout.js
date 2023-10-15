import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Bar } from 'components/AppBar/AppBar';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

class Layout extends React.Component {
  createNotification = type => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning(
            'Warning message',
            'Close after 3000ms',
            3000
          );
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
      <Container maxWidth="md">
        <Bar />
        {/* <button onClick={this.createNotification('info')}>
          Afișează notificare Info
        </button>
        <button onClick={this.createNotification('success')}>
          Afișează notificare Success
        </button>
        <button onClick={this.createNotification('warning')}>
          Afișează notificare Warning
        </button>
        <button onClick={this.createNotification('error')}>
          Afișează notificare Error
        </button> */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <NotificationContainer />
      </Container>
    );
  }
}

export default Layout;
