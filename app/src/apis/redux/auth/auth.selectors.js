import { createSelector } from 'reselect';

const authData = state => state.auth;

export const selectAccessToken = createSelector(
    authData,
    state => state?.auth?.access_token,
);


export const selectRoles = createSelector(
    authData,
  state => state?.auth?.account?.role
);

export const selectAccountData = createSelector(
    authData,
  state => state?.auth?.account
);

export const isAuthenticated = createSelector(
  authData,
  state => state?.auth
);

