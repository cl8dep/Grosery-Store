import React from 'react';
import { Redirect, Route } from 'react-router';
import { accountStatus, isAuthenticated } from '../redux/auth/auth.selectors';
import { connect } from 'react-redux';
import AccountStatus from '../bussines/AccountStatus';

function PrivateRoute({ component, accountStatus, isAuthenticated, ...rest }) {

  const getContentToRender = (props) => {
    if (isAuthenticated) {
      return accountStatus === AccountStatus.Registered ? (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: {
              from: props.location,
            },
          }}
        />
      ) : React.createElement(component, props);
    }

    return (
      <Redirect
        to={{
          pathname: "/sign-in",
          state: {
            from: props.location,
          },
        }}
      />
    )
  };

  return (
    <Route
      {...rest}
      render={props => getContentToRender(props)}
    />
  )
}


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  accountStatus: accountStatus(state)
});

export default connect(mapStateToProps)(PrivateRoute);
