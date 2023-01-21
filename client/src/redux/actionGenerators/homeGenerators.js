import * as actionTypes from '../actionTypes.js';

export const getData = payload => ({
  type: actionTypes.GET__HOME_PAGE_DATA_FROM_API,
  payload,
});
