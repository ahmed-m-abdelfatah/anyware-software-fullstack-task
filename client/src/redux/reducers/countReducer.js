import * as actionTypes from '../actionTypes.js';

const initState = {
  count: 0,
};

export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_CHANGE: {
      console.log('COUNT_CHANGE');

      return {
        ...state,
        count: state.count + action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
