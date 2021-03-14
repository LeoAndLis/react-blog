import { SET_ERROR } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: string;
};

const errorReducer = (state: string = '', { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_ERROR:
      return payload;
    default:
      return state;
  }
};

export default errorReducer;