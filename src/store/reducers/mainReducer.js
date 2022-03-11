import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  scrollIndex: {
    prev: 'section_main',
    next: 'section_services',
    current: 'section_main',
    index: '1',
  },
};
export const SET_INDEX = 'SET_INDEX';

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.main };
    case SET_INDEX:
      return { ...state.main, scrollIndex: payload };

    default: {
      return state;
    }
  }
};

export default mainReducer;
