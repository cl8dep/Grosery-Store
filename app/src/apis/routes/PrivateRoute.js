import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../redux/auth/auth.selectors';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(PrivateRoute);
