import { ADD_TO_CART, RESET_CART, REMOVE_FROM_CART } from "constants/actions";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const resetCart = () => ({
  type: RESET_CART,
});
