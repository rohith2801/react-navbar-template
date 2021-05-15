import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Switch,
  Route,
} from 'react-router-dom';

import theme from './templates/Theme';
import './App.css';
import Layout from './templates/Layout';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/login" key="/login" component={Login}></Route>
          <Route path="/" key="/" component={Layout}></Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
