import api from "../api";
import { REMOVE_FROM_CART, ADD_TO_CART, EMPTY_CART, READ_SHOPPING_ARTICLES } from "../types";

const initialState = {
    articles: [],
    cart:[]
};

const handlers = {
    [READ_SHOPPING_ARTICLES]: handleReadArticlesShopping,
    [ADD_TO_CART]: handleAddToCart,
    [REMOVE_FROM_CART]: handleRemoveFromCart,
    [EMPTY_CART]: handleEmptyCart
  };
  
  export default function reducer(state = initialState, action) {
    const handler = handlers[action.type];

    if(action.type === READ_SHOPPING_ARTICLES){
      return handler ? handler(state, action.payload.data) : state;
    }else{
      return handler ? handler(state, action.payload) : state;
    }
  }

  function handleReadArticlesShopping(state, payload ) {
    return {
        ...state,
        articles: payload
     };
  }

  function handleAddToCart(state, articleId ) {
    let newItem = state.articles.find(
      (article) => article.id === articleId
    );
    console.log(newItem);

    let itemInCart = state.cart.find((item) => item.id === newItem.id);
    return itemInCart
      ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      : {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
    }

    function handleRemoveFromCart(state, articleId ) {
    let itemToDelete = state.cart.find((item) => item.id === articleId);

        return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
                item.id === articleId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== articleId),
            };
    }

    function handleEmptyCart(state, articleId ) {
    return initialState;
    }

