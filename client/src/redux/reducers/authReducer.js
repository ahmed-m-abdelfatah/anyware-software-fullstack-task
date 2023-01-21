import * as actionTypes from '../actionTypes.js';

const initState = {
  currentUser: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_FROM_API: {
      return {
        ...state,
        currentUser: state.currentUser,
      };
    }

    default: {
      return state;
    }
  }
};
