import React from 'react';

import Layout from "./components/Layout";

import Error from "./pages/error";
import Login from "./pages/login";

import PrivateRoute from './apis/router/PrivateRoute';
import PublicRoute from './apis/router/PublicRoute';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
