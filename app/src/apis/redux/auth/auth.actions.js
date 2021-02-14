import AuthActionTypes from './auth.types';

export const setAuthData = (authUserData) => ({
    type: AuthActionTypes.SET_AUTH_DATA,
    payload: authUserData
});


export const signOut = () => ({
    type: AuthActionTypes.SIGN_OUT
});

export const refreshAuthState = () => ({
    type: AuthActionTypes.REFRESH_AUTH_STATE
});




