import { combineReducers } from 'redux';
import articlesCountReducer from './articlesCountReducer';
import articlesListReducer from './articlesListReducer';
import contentLoadingReducer from './contentLoadingReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';

const reducer = combineReducers({
  articlesCount: articlesCountReducer,
  articlesList: articlesListReducer,
  contentLoading: contentLoadingReducer,
  curArticle: articleReducer,
  error: errorReducer,
});

export default reducer;