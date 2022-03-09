import { SET_INDEX } from '../reducers/mainReducer';

export const setIndexAction = (index) => {
  return {
    type: SET_INDEX,
    payload: index,
  };
};
