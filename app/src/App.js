import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from './apis/routes/PrivateRoute';
import PublicRoute from './apis/routes/PublicRoute';

import Layout from "./components/Layout";

import Error from "./pages/error";
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import theme from './themes'
import { Provider } from 'react-redux';
import store from './apis/redux';
import { ServerManagerProvider } from './components/AxiosProvider/ServerManagerProvider';

export default function App() {

  return (
    <ServerManagerProvider>
      <Provider store={store}>
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
              <PrivateRoute path="/app" component={Layout} isAuthenticated={true} />
              <PublicRoute path="/sign-in" component={SignIn} />
              <PublicRoute path="/sign-up" component={SignUp} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ServerManagerProvider>
  );
}
