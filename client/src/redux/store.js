import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers/allReducer.js';

const store = createStore(
  combineReducers({
    countReducer: reducers.countReducer,
    sidebarReducer: reducers.sidebarReducer,
    authReducer: reducers.authReducer,
    homeReducer: reducers.homeReducer,
  }),
);

export default store;
