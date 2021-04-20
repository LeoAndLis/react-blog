import { combineReducers } from 'redux';
import articlesCountReducer from './articlesCountReducer';
import articlesListReducer from './articlesListReducer';
import articleReducer from './articleReducer';
import contentLoadingReducer from './contentLoadingReducer';
import errorReducer from './errorReducer';
import needRedirectReducer from './needRedirectReducer';
import validationErrorReducer from './validationErrorReducer';
import userLoadingReducer from './userLoadingReducer';
import userReducer from './userReducer';
import userAuthorizeReducer from './userAuthorizeAction';

const reducer = combineReducers({
  articlesCount: articlesCountReducer,
  articlesList: articlesListReducer,
  contentLoading: contentLoadingReducer,
  curArticle: articleReducer,
  error: errorReducer,
  needRedirect: needRedirectReducer,
  validationErrors: validationErrorReducer,
  userIsAuthorized: userAuthorizeReducer,
  userLoading: userLoadingReducer,
  user: userReducer,
});

export default reducer;