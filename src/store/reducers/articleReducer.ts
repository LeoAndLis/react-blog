import { GET_ARTICLE } from '../types/types';

const articleReducer = (state: any = {}, { type, payload }: any) => {
  switch (type) {
    case GET_ARTICLE:
      return payload;
    default:
      return state;
  }
};

export default articleReducer;