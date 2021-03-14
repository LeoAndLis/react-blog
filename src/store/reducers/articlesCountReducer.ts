import { SET_ARTICLES_COUNT } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: number;
};

const articlesCountReducer = (state: number = 0, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_ARTICLES_COUNT:
      return payload;
    default:
      return state;
  }
};

export default articlesCountReducer;