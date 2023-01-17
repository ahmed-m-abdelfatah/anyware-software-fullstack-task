import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers/allReducer.js';

const store = createStore(
  combineReducers({
    countReducer: reducers.countReducer,
  }),
);

export default store;