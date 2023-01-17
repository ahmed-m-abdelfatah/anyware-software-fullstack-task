import * as actionTypes from '../actionTypes.js';

export const countChange = payload => ({
  type: actionTypes.COUNT_CHANGE,
  payload,
});
