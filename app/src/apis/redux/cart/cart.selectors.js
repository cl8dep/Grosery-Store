import { createSelector } from 'reselect';

const cart = state => state.cart;

export const selectCartProducts = createSelector(
  cart,
  state => state.products
);

export const selectCartData = createSelector(
  cart,
  state => {
    const {products, ...rest} = state;
    return rest;
  }
);








