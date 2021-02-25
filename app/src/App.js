import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from './apis/routes/PrivateRoute';
import PublicRoute from './apis/routes/PublicRoute';

import Layout from "./components/Layout";
import SessionManager from './components/SessionManager';
import ServerManagerProvider  from './components/ServerManagerProvider';

import Error from "./pages/error";
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import theme from './themes'
import { Provider } from 'react-redux';
import store from './apis/redux';
import AuthRoute from './apis/routes/AuthRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  return (
    <Provider store={store}>
      <ToastContainer/>
      <ServerManagerProvider>
        <SessionManager>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
                <Route
                  exact
                  path="/app"
                  render={() => <Redirect to="/app/dashboard" />}
                />
                <PrivateRoute path="/app" component={Layout} />
                <AuthRoute path="/sign-in" component={SignIn} />
                <AuthRoute path="/sign-up" component={SignUp} />
                <Route component={Error} />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </SessionManager>
      </ServerManagerProvider>
    </Provider>
  );
}
