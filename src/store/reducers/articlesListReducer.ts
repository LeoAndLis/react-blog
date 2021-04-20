import { SET_ARTICLES_LIST, UPDATE_ARTICLE_FAVORITE } from '../types/types';
import { ArticleType } from '../../lib/types';

type ReducerActionType = {
  type: string;
  payload: ArticleType[] | string;
};

const articlesListReducer = (state: ArticleType[] = [], { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_ARTICLES_LIST:
      return payload;
    case UPDATE_ARTICLE_FAVORITE:
      return state.map((item: ArticleType) => {
        if ( item.slug === payload ) {
          const newItem = item;
          newItem.favorited = !!item.favorited;
          return newItem;
        }
        return item;
      });
    default:
      return state;
  }
};

export default articlesListReducer;
