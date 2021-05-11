import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './templates/Theme';
import './App.css';
import Layout from './templates/Layout';
import Login from './components/login/Login';

function App() {
  const isAuthenticationEnabled: boolean = true;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {localStorage.getItem("isUserLoggedIn") === 'true' || !isAuthenticationEnabled ? <Layout /> : <Login />}
      </ThemeProvider>
    </>
  );
}

export default App;
