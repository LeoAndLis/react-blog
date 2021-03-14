import { SET_ARTICLES_LIST_LOADING } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: boolean;
};

const articlesListLoadingReducer = (state: boolean = false, { type, payload }: ReducerActionType ) => {
  switch (type) {
    case SET_ARTICLES_LIST_LOADING:
      return payload;
    default:
      return state;
  }
};

export default articlesListLoadingReducer;
