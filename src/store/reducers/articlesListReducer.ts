import { SET_ARTICLES_LIST } from '../types/types';
import { ArticleType } from '../../lib/types';

type ReducerActionType = {
  type: string;
  payload: ArticleType[];
};

const articlesListReducer = ( state: ArticleType[] = [], { type, payload }: ReducerActionType ) => {
  switch (type) {
    case SET_ARTICLES_LIST:
      return payload;
    default:
      return state;
  }
};

export default articlesListReducer;