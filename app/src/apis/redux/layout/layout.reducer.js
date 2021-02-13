import ActionTypes from './layout.types';

const INITIAL_STATE = {
    isDrawerOpen: false
};

const layoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen,
            };
        default:
            return state;
    }
};

export default layoutReducer;
