import { Redirect, Route } from 'react-router-dom';
import React from 'react';

function PublicRoute({ component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}

export default PublicRoute;
