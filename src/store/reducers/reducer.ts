import { combineReducers } from 'redux';
import articlesCountReducer from './articlesCountReducer';
import articlesListReducer from './articlesListReducer';
import articleLoadingReducer from './articleLoadingReducer';
import articlesListLoadingReducer from './articlesListLoadingReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';

const reducer = combineReducers({
  articlesCount: articlesCountReducer,
  articlesList: articlesListReducer,
  articleLoading: articleLoadingReducer,
  articlesListLoading: articlesListLoadingReducer,
  curArticle: articleReducer,
  error: errorReducer,
});

export default reducer;