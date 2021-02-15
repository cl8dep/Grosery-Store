import {combineReducers, createStore} from 'redux';
import layoutReducer from "./layout/layout.reducer";
import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';

const reducer =  combineReducers({
    layout: layoutReducer,
    auth: authReducer,
    cart: cartReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const getBearerToken = () => {
    const { auth } = store.getState();
    return auth.auth?.access_token ? `Bearer ${auth.auth.access_token}` : null
};

export default store;

export {
    getBearerToken
}
