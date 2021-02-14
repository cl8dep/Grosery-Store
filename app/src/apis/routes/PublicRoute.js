import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../redux/auth/auth.selectors';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(PublicRoute);
