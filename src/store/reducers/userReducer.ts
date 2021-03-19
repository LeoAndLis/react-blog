import { SET_USER } from '../types/types';
import { UserType } from '../../lib/types';

type ReducerActionType = {
  type: string;
  payload: UserType;
};

const defaultState: UserType = {
  bio: '',
  email: '',
  image: null,
  password: '',
  token: '',
  username: '',
};

const articleReducer = (state: UserType = defaultState, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};

export default articleReducer;