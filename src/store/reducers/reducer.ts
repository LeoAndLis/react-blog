import { combineReducers } from 'redux';
import articlesCountReducer from './articlesCountReducer';
import articlesListReducer from './articlesListReducer';
import contentLoadingReducer from './contentLoadingReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';
import userLoadingReducer from './userLoadingReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  articlesCount: articlesCountReducer,
  articlesList: articlesListReducer,
  contentLoading: contentLoadingReducer,
  curArticle: articleReducer,
  error: errorReducer,
  userLoading: userLoadingReducer,
  user: userReducer,
});

export default reducer;