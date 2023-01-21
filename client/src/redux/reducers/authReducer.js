import { keys, removeFromStorage } from '../../utils/browser_storage/local_storage.js';
import * as actionTypes from '../actionTypes.js';

const initState = {
  token: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_FROM_API: {
      return {
        ...state,
        token: state.token,
      };
    }

    case actionTypes.SET_USER_FROM_BROWSER_STORAGE: {
      return {
        ...state,
        token: state.token,
      };
    }

    case actionTypes.DELETE_USER_FROM_BROWSER_STORAGE: {
      removeFromStorage(keys.token);

      return {
        ...state,
        token: null,
      };
    }

    default: {
      return state;
    }
  }
};
