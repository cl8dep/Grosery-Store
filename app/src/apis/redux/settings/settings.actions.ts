import AuthActionTypes from './settings.types';
import ReduxAction from '../types/action';

export function setSettings(settings: any): ReduxAction {
    return {
        type: AuthActionTypes.SET_SETTINGS,
        data: settings
    }
}




