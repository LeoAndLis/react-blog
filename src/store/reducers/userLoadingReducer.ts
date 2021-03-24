import { SET_USER_LOADING } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: boolean;
};

const userLoadingReducer = (state: boolean = false, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_USER_LOADING:
      return payload;
    default:
      return state;
  }
};

export default userLoadingReducer;