import SettingsActionTypes, { SettingsState } from './settings.types';
import ReduxAction from '../types/action';

const INITIAL_STATE : SettingsState = {
};

function settingsReducer(state = INITIAL_STATE, action: ReduxAction) {
    if (action.type === SettingsActionTypes.SET_SETTINGS) {
        return {
            ...state,
            ...action.data,
        };
    } else {
        return state;
    }
}

export default settingsReducer;
