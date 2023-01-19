import * as actionTypes from '../actionTypes.js';
import { isMobileScreen } from '../../utilities.js';

const initState = {
  active: isMobileScreen() === false,
};

export const sidebarReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIDEBAR_TOGGLE: {
      return {
        ...state,
        active: !state.active,
      };
    }

    default: {
      return state;
    }
  }
};
