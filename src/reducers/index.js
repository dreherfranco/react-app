import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import articlesReducer from './articlesReducer';
const reducer = combineReducers({
    counter: counterReducer,
    articles: articlesReducer
});

export default reducer;