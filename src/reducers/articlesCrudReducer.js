import { CREATE, UPDATE, DELETE, READ, NO_DATA } from "../types";

const initialState = {
    articles: [],
};

const handlers = {
    [CREATE]: handleCreateArticle,
    [READ]: handleReadArticle
  };
  
  export default function reducer(state = initialState, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload.data) : state;
  }

  function handleReadArticle(state, articles ) {
    console.log(articles);
    return {
      ...state,
      articles: articles
    };
  }
  
  function handleCreateArticle(state, articles ) {
    return {
      ...state,
      articles: state.articles.concat(articles)
    };
  }

  
//OTRA FORMA DE HACER EL REDUCER

/*export default function articlesReducer(state = initialState, action) {
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
                articles: action.payload.data
            };
        }
        case NO_DATA:
            return initialState;
        default:
            return initialState;
    }
}*/
