import { SET_ARTICLE } from '../types/types';
import { ArticleType } from '../../lib/types';

type ReducerActionType = {
  type: string;
  payload: ArticleType;
};

const defaultState: ArticleType = {
  slug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  favorited: false,
  favoritesCount: 0,
  author: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
};

const articleReducer = (state: ArticleType = defaultState, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_ARTICLE:
      return payload;
    default:
      return state;
  }
};

export default articleReducer;