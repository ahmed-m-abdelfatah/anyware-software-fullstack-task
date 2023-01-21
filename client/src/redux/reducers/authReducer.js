import { Navigate } from 'react-router-dom';
import { keys, removeFromStorage, saveToStorage } from '../../utils/browser_storage/local_storage.js';
import * as actionTypes from '../actionTypes.js';
import * as paths from '../../paths.js';

const initState = {
  token: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_FROM_API: {
      const token = action.token;
      saveToStorage(keys.token, token);

      return {
        ...state,
        token,
      };
    }

    case actionTypes.SET_USER_FROM_BROWSER_STORAGE: {
      return {
        ...state,
        token: action.token,
      };
    }

    case actionTypes.DELETE_USER_FROM_BROWSER_STORAGE: {
      removeFromStorage(keys.token);
      <Navigate to={paths.REGISTRATION_PATH} />;

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
