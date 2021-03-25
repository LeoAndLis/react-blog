import { SET_VALIDATION_ERROR } from '../types/types';
import { ValidationErrorsType } from '../../lib/types';

type ReducerActionType = {
  type: string;
  payload: ValidationErrorsType;
};

const validationErrorReducer = (state: ValidationErrorsType = null, { type, payload }: ReducerActionType) => {
  switch (type) {
    case SET_VALIDATION_ERROR:
      return payload;
    default:
      return state;
  }
};

export default validationErrorReducer;