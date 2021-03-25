import { SET_USER_AUTHORIZED } from '../types/types';

type ReducerActionType = {
  type: string;
  payload: boolean;
};

const userAuthorizeReducer = (state: boolean = false, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_USER_AUTHORIZED:
      return payload;
    default:
      return state;
  }
};

export default userAuthorizeReducer;