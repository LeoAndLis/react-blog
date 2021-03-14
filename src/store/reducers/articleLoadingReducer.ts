import { SET_ARTICLE_LOADING } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: boolean;
};

const articleLoadingReducer = (state: boolean = false, { type, payload }: ReducerActionType ) => {
  switch (type) {
    case SET_ARTICLE_LOADING:
      return payload;
    default:
      return state;
  }
};

export default articleLoadingReducer;