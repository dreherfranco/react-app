import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
//import articlesCrudReducer from './articlesCrudReducer';
import shoppingReducer from './shoppingReducer';

const reducer = combineReducers({
    counter: counterReducer,
    //articles: articlesCrudReducer,
    shopping: shoppingReducer,
});

export default reducer;