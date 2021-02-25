import AuthActionTypes from './auth.types';
import ReduxAction from '../types/action';

export function setAuthData(authUserData: any): ReduxAction {
    return {
        type: AuthActionTypes.SET_AUTH_DATA,
        data: authUserData
    }
}

export function signOut(): ReduxAction {
    return {
        type: AuthActionTypes.SIGN_OUT
    }
}

export const refreshAuthState = () => ({
    type: AuthActionTypes.REFRESH_AUTH_STATE
});




