import {
  NEED_REDIRECT,
  SET_ARTICLE,
  SET_ARTICLES_LIST,
  SET_ARTICLES_COUNT,
  SET_CONTENT_LOADING,
  SET_ERROR,
  SET_VALIDATION_ERROR,
  SET_USER_AUTHORIZED,
  SET_USER_LOADING,
  SET_USER,
  UPDATE_ARTICLE_FAVORITE,
  UPDATE_CUR_ARTICLE_FAVORITE,
} from '../types/types';
import store from '../store';
import ArticlesService from '../../services/ArticlesService';
import UserService from '../../services/UserService';
import { getUserToken, setUserToken } from '../../lib/storage';
import { AddArticleType, ArticleType, ValidationErrorsType, UserType, UserEditType } from '../../lib/types';
import ValidationErrors from '../../services/ValidationErrors';

export const needRedirectAction = (payload: boolean) => ({ type: NEED_REDIRECT, payload });
const setArticleAction = (payload: ArticleType) => ({ type: SET_ARTICLE, payload });
const setArticlesListAction = (payload: ArticleType[]) => ({ type: SET_ARTICLES_LIST, payload });
const setArticlesCountAction = (payload: number) => ({ type: SET_ARTICLES_COUNT, payload });
const setContentLoadingAction = (payload: boolean) => ({ type: SET_CONTENT_LOADING, payload });
const setErrorAction = (payload: string) => ({ type: SET_ERROR, payload });
export const setValidationErrorAction = (payload: ValidationErrorsType) => ({ type: SET_VALIDATION_ERROR, payload });
export const setUserAuthorizedAction = (payload: boolean) => ({ type: SET_USER_AUTHORIZED, payload });
const setUserLoadingAction = (payload: boolean) => ({ type: SET_USER_LOADING, payload });
export const setUserAction = (payload: UserType | null) => ({ type: SET_USER, payload });
const updateArticleFavoriteAction = (payload: string) => ({ type: UPDATE_ARTICLE_FAVORITE, payload });
const updateCurArticleFavoriteAction = () => ({ type: UPDATE_CUR_ARTICLE_FAVORITE });

const articlesService = new ArticlesService();
const userService = new UserService();

export const setArticle = (slug: string) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setErrorAction(''));
  const userToken = store.getState().user?.token || getUserToken() || '';
  articlesService
    .getArticle(slug, userToken)
    .then((result) => {
      dispatch(setArticleAction(result.article));
    })
    .catch(() => {
      dispatch(setErrorAction(`There was an error receiving the article ${slug}`));
    })
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const setArticlesList = (page: number, pageSize: number | undefined) => (dispatch: any) => {
  const offset: number = page * (pageSize || 20);
  dispatch(setContentLoadingAction(true));
  dispatch(setErrorAction(''));
  const userToken = store.getState().user?.token || getUserToken() || '';
  articlesService
    .getArticles(offset, userToken)
    .then((result) => {
      dispatch(setArticlesListAction(result.articles));
      dispatch(setArticlesCountAction(result.articlesCount));
    })
    .catch((error) => dispatch(setErrorAction(error.message)))
    .finally(() => dispatch(setContentLoadingAction(false)));
};

const switchArticleAction = (dispatch: any, slug: string, type: 'listArticle' | 'curArticle') => {
  switch (type) {
    case 'listArticle':
      dispatch(updateArticleFavoriteAction(slug));
      break;
    case 'curArticle':
      dispatch(updateCurArticleFavoriteAction());
      break;
    default:
      break;
  }
};

export const fetchArticleFavorite = (slug: string, favorite: boolean, type: 'listArticle' | 'curArticle') => (dispatch: any) => {
  const token = store.getState().user?.token || '';
  dispatch(setErrorAction(''));
  if (favorite) {
    articlesService
      .unFavoriteArticle(slug, token)
      .then(() => switchArticleAction(dispatch, slug, type))
      .catch((error) => dispatch(setErrorAction(error.message)))
      .finally(() => dispatch(setContentLoadingAction(false)));
  } else {
    articlesService
      .favoriteArticle(slug, token)
      .then(() => switchArticleAction(dispatch, slug, type))
      .catch((error) => dispatch(setErrorAction(error.message)))
      .finally();
  }
};

export const createArticle = (article: AddArticleType) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setValidationErrorAction(null));
  dispatch(setErrorAction(''));
  articlesService
    .addArticle(article, store.getState().user?.token)
    .then(() => dispatch(needRedirectAction(true)))
    .catch((error) => {
      if (error instanceof ValidationErrors) {
        dispatch(setValidationErrorAction(error.errors));
      }
      dispatch(setErrorAction(error.message));
    })
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const deleteArticle = (slug: string) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setErrorAction(''));
  articlesService
    .deleteArticle(slug, store.getState().user?.token)
    .then(() => dispatch(needRedirectAction(true)))
    .catch((error) => {
      dispatch(setErrorAction(error.message));
    })
    .finally(dispatch(setContentLoadingAction(false)));
};

export const updateArticle = (article: AddArticleType, slug?: string) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setValidationErrorAction(null));
  dispatch(setErrorAction(''));
  const curSlug = slug || '';
  articlesService
    .updateArticle(curSlug, article, store.getState().user?.token)
    .then(() => {})
    .catch((error) => {
      if (error instanceof ValidationErrors) {
        dispatch(setValidationErrorAction(error.errors));
      }
      dispatch(setErrorAction(error.message));
    })
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const authenticateUser = (userData: UserType) => (dispatch: any) => {
  dispatch(setContentLoadingAction(true));
  dispatch(setValidationErrorAction(null));
  dispatch(setErrorAction(''));
  userService
    .authentication(userData)
    .then((result) => {
      dispatch(setUserAction(result.user));
      dispatch(setUserAuthorizedAction(true));
      if (result.user.token) {
        setUserToken(result.user.token);
      }
    })
    .catch((error) => {
      if (error instanceof ValidationErrors) {
        dispatch(setValidationErrorAction(error.errors));
      }
      dispatch(setErrorAction(error.message));
    })
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const registerUser = (userData: UserType) => (dispatch: any) => {
  dispatch(setErrorAction(''));
  dispatch(setValidationErrorAction(null));
  dispatch(setContentLoadingAction(true));
  userService
    .registration(userData)
    .then((result) => {
      dispatch(setUserAction(result.user));
      dispatch(setUserAuthorizedAction(true));
      if (result.user.token) {
        setUserToken(result.user.token);
      }
    })
    .catch((error) => {
      if (error instanceof ValidationErrors) {
        dispatch(setValidationErrorAction(error.errors));
      }
      dispatch(setErrorAction(error.message));
    })
    .finally(() => dispatch(setContentLoadingAction(false)));
};

export const setCurrentUser = () => (dispatch: any) => {
  const userToken = getUserToken();
  dispatch(setErrorAction(''));
  if (userToken) {
    dispatch(setUserLoadingAction(true));
    userService
      .getCurrentUser(userToken)
      .then((result) => {
        dispatch(setUserAction(result.user));
        dispatch(setUserAuthorizedAction(true));
      })
      .catch((error) => dispatch(setErrorAction(error.message)))
      .finally(() => dispatch(setUserLoadingAction(false)));
  }
};

export const updateUser = (user: UserEditType) => (dispatch: any) => {
  dispatch(setErrorAction(''));
  dispatch(setValidationErrorAction(null));
  dispatch(setUserLoadingAction(true));
  userService
    .updateUser(user)
    .then((result) => dispatch(setUserAction(result.user)))
    .catch((error) => {
      if (error instanceof ValidationErrors) {
        dispatch(setValidationErrorAction(error.errors));
      }
      dispatch(setErrorAction(error.message));
    })
    .finally(() => dispatch(setUserLoadingAction(false)));
};
