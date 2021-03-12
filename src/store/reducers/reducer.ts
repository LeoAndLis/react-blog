import { combineReducers } from 'redux';
import articleReducer from './articleReducer';

const reducer = combineReducers({
  curArticle: articleReducer,
});

export default reducer;