import { createSelector } from 'reselect';

const select = (state: any) => state.settings;

export const selectSettings = createSelector(
  select,
    state => state
);

export const selectSignUpSetting = createSelector(
  select,
  state => state.signUp
);

export const selectSignInSetting = createSelector(
  select,
  state => state.signIn
);

