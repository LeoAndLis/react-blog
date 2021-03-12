import { GET_ARTICLE, GET_ARTICLES_LIST } from '../types/types';
import ArticlesService from '../../services/ArticlesService';

const articlesService = new ArticlesService();

export const getArticle = (slug: string) => (dispatch: any) => {
  articlesService.getArticle(slug)
    .then((result) => {
      dispatch({ type: GET_ARTICLE, payload: result.article });
    })
    .catch();
};

export const getArticlesList = (payload: number) => ({ GET_ARTICLES_LIST, payload });