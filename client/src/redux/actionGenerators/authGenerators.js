import * as actionTypes from '../actionTypes.js';

export const setUserTokenFromApi = token => ({
  type: actionTypes.SET_USER_FROM_API,
  token,
});

export const setUserTokenFromBrowserStorage = token => ({
  type: actionTypes.SET_USER_FROM_BROWSER_STORAGE,
  token,
});

export const deleteUserTokenFromBrowserStorage = () => ({
  type: actionTypes.DELETE_USER_FROM_BROWSER_STORAGE,
});
