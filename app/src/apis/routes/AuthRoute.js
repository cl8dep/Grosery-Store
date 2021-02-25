import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../redux/auth/auth.selectors';
import { connect } from 'react-redux';

function AuthRoute(props) {
  const { component, isAuthenticated, ...rest} = props;
  return (
    <Route {...rest}
           render={props =>
             isAuthenticated ? (
               <Redirect
                 to={{
                   pathname: "/app",
                 }}
               />
             ) : (
               React.createElement(component, props)
             )
           }/>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(AuthRoute);
