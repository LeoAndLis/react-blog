import {
  SET_ARTICLE,
  SET_ARTICLES_LIST,
  SET_ARTICLE_LOADING,
  SET_ARTICLES_LIST_LOADING,
  SET_ARTICLES_COUNT,
  SET_ERROR,
} from '../types/types';
import ArticlesService from '../../services/ArticlesService';
import { ArticleType } from '../../lib/types';

const setArticleAction = (payload: ArticleType) => ({ type: SET_ARTICLE, payload });
const setArticlesListAction = (payload: ArticleType[]) => ({ type: SET_ARTICLES_LIST, payload });
const setArticleLoadingAction = (payload: boolean) => ({ type: SET_ARTICLE_LOADING, payload });
const setArticlesListLoadingAction = (payload: boolean) => ({ type: SET_ARTICLES_LIST_LOADING, payload });
const setArticlesCountAction = (payload: number) => ({ type: SET_ARTICLES_COUNT, payload });
const setErrorAction = (payload: string) => ({ type: SET_ERROR, payload });

const articlesService = new ArticlesService();

export const setArticle = (slug: string) => (dispatch: any) => {
  dispatch(setArticleLoadingAction(true));
  dispatch(setErrorAction(''));
  articlesService.getArticle(slug)
    .then((result) => {
      dispatch(setArticleAction(result.article));
      dispatch(setArticleLoadingAction(false));
    })
    .catch(() => {setErrorAction(`There was an error receiving the article ${slug}`);});
};

export const setArticlesList = (page: number, pageSize: number | undefined) => (dispatch: any) => {
  const offset: number = page * (pageSize || 20);
  dispatch(setArticlesListLoadingAction(true));
  dispatch(setErrorAction(''));
  articlesService.getArticles(offset)
    .then((result) => {
      dispatch(setArticlesListAction(result.articles));
      dispatch(setArticlesCountAction(result.articlesCount));
      dispatch(setArticlesListLoadingAction(false));
    })
    .catch(() => {setErrorAction(`There was an error receiving articles from page ${page}`);});
};
