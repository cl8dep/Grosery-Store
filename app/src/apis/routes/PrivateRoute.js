import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
