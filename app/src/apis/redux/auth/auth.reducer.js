import AuthActionTypes from './auth.types';
import {loadAuthState} from "../../cookies";
import { saveAuthState } from '../../cookies/authStoreFromCookies';
//import { clearAuthState } from '../../cookies/authStoreFromCookies';
//import {clearAuthState} from "../../cookies/authStoreFromCookies";

const INITIAL_STATE = {
    auth: loadAuthState()
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_DATA:
            saveAuthState(action.payload);
            return {
                ...state,
                auth: action.payload,
            };
        case AuthActionTypes.REFRESH_AUTH_STATE:
            return {
                ...state,
                auth: loadAuthState(),
            };

        case AuthActionTypes.SIGN_OUT:
            //clearAuthState();
            return {
                ...state,
                auth: null,
            };
        default:
            return state;
    }
};

export default authReducer;
