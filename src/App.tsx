import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import theme from "./templates/Theme";
import "./App.css";
import Layout from "./templates/Layout";
import Login from "./components/login/Login";
import store from "./store";
import { useTranslation } from "react-i18next";
import Progress from "./common/Progress";
import AlertBox from "./common/AlertBox";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ConfirmPopup from './common/AssertionPopup';
import DialogBox from'./common/DialogBox';
const queryClient = new QueryClient();

function App() {
  useTranslation(["common"]);
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Progress />
            <ConfirmPopup/>
            <DialogBox/>
            <AlertBox />
            <Switch>
              <Route path="/login" key="/login" component={Login}></Route>
              <Route path="/" key="/" component={Layout}></Route>
            </Switch>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
