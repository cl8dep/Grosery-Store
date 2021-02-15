import ActionTypes from './cart.types';

const INITIAL_STATE = {
    products: null,
    subtotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.data
                ]
            };
        case ActionTypes.SET_CART_PRODUCTS:
            return {
                ...state,
                products: action.data
            };
        case ActionTypes.SET_CART_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default cartReducer;
