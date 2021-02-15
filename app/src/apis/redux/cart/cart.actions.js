import ActionTypes from './cart.types';

export const addCartProduct = (data) => ({
  type: ActionTypes.ADD_CART_PRODUCT,
  data
});

export const setCartProducts = (data) => ({
  type: ActionTypes.SET_CART_PRODUCTS,
  data
});

export const setCartData = (data) => ({
  type: ActionTypes.SET_CART_DATA,
  data
});
