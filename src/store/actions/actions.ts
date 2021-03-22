import {
  SET_ARTICLE,
  SET_ARTICLES_LIST,
  SET_ARTICLES_COUNT,
  SET_CONTENT_LOADING,
  SET_ERROR,
  SET_USER,
} from '../types/types';
import ArticlesService from '../../services/ArticlesService';
import UserService from '../../services/UserService';
import { ArticleType, UserType } from '../../lib/types';

const setArticleAction = (payload: ArticleType) => ({ type: SET_ARTICLE, payload });
const setArticlesListAction = (payload: ArticleType[]) => ({ type: SET_ARTICLES_LIST, payload });
const setArticlesCountAction = (payload: number) => ({ type: SET_ARTICLES_COUNT, payload });
const setContentLoadingAction = (payload: boolean) => ({ type: SET_CONTENT_LOADING, payload });
const setErrorAction = (payload: string) => ({ type: SET_ERROR, payload });
const setUserAction = (payload: UserType) => ({ type: SET_USER, payload });

const articlesService = new ArticlesService();
const userService = new UserService();

export const setArticle = (slug: string) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setErrorAction(''));
  articlesService.getArticle(slug)
    .then((result) => {
      dispatch(setArticleAction(result.article));
    })
    .catch(() => {setErrorAction(`There was an error receiving the article ${slug}`);})
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const setArticlesList = (page: number, pageSize: number | undefined) => (dispatch: any) => {
  const offset: number = page * (pageSize || 20);
  dispatch(setContentLoadingAction(true));
  dispatch(setErrorAction(''));
  articlesService.getArticles(offset)
    .then((result) => {
      dispatch(setArticlesListAction(result.articles));
      dispatch(setArticlesCountAction(result.articlesCount));
    })
    .catch(() => {setErrorAction(`There was an error receiving articles from page ${page}`);})
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const authenticateUser = (userData: UserType) => (dispatch: any) => {
  setContentLoadingAction(true);
  dispatch(setErrorAction(''));
  userService.authentication(userData)
    .then((result) => {
      dispatch(setUserAction(result));
    })
    .catch((errors) => {console.log(errors);})
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const registerUser = (userData: UserType) => (dispatch: any) => {
  setContentLoadingAction(true);
  dispatch(setErrorAction(''));
  userService.registration(userData)
    .then( (result) => dispatch(setUserAction(result)) )
    .catch((errors) => {console.log(errors);})
    .finally(() => dispatch(setContentLoadingAction(false)));
};