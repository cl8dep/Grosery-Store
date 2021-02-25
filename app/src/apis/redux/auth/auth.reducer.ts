import AuthActionTypes, { AuthState } from './auth.types';
import {loadAuthState} from "../../cookies";
import { clearAuthState, saveAuthState } from '../../cookies/authStoreFromCookies';
import ReduxAction from '../types/action';

const INITIAL_STATE : AuthState = {
    auth: loadAuthState()
};

function authReducer(state = INITIAL_STATE, action: ReduxAction) {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_DATA:
            saveAuthState(action.data);
            return {
                ...state,
                auth: action.data,
            };
        case AuthActionTypes.REFRESH_AUTH_STATE:
            return {
                ...state,
                auth: loadAuthState(),
            };

        case AuthActionTypes.SIGN_OUT:
            clearAuthState();
            return {
                ...state,
                auth: null,
            };
        default:
            return state;
    }
}

export default authReducer;
