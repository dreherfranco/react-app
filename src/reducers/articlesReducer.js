import { CREATE, UPDATE, DELETE, READ, NO_DATA } from "../types";

export const initialState = {
    articles: []
};

export default function articlesReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case CREATE:
        {
            
            return {
                ...state,
                articles: [...state.articles, action.payload],
            };
        }
        case UPDATE:
        {
            let newData = state.articles.map((el) =>
            el.id === action.payload.id ? action.payload : el
          );
    
          return {
            ...state,
            articles: newData,
          };
        }
        case DELETE:
        {
            let newData = state.articles.filter((el) => el.id !== action.payload);
            return {
              ...state,
              articles: newData,
            };
        }
        case READ:
        {
            return {
                ...state,
                articles: action.payload.data,
              };
        }
        case NO_DATA:
            return initialState;
        default:
            return state;
    }
}