import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.main };

    default: {
      return state;
    }
  }
};

export default mainReducer;
