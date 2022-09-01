import {
    ADD_TO_CART,
    EMPTY_CART,
    READ_SHOPPING_ARTICLES,
    REMOVE_FROM_CART,
  } from "../types";
  
  export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
  
  export const removeFromCart = (id, all = false) =>
    all
      ? { type: EMPTY_CART, payload: id }
      : { type: REMOVE_FROM_CART, payload: id };
  
  export const emptyCart = () => ({ type: EMPTY_CART });

  export const readArticlesShoppingAction = (data) => ({ type: READ_SHOPPING_ARTICLES, payload: data });