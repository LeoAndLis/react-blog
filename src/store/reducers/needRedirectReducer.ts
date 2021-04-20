import { NEED_REDIRECT } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: boolean;
};

const needRedirectReducer = (state: boolean = false, { type, payload }: ReducerActionType) => {
  switch (type) {
    case NEED_REDIRECT:
      return payload;
    default:
      return state;
  }
};

export default needRedirectReducer;
