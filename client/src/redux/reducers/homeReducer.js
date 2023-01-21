import * as actionTypes from '../actionTypes.js';

const initState = {
  announcements: [],
  dues: [],
};

export const homeReducer = async (state = initState, action) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.GET__HOME_PAGE_DATA_FROM_API: {
      return {
        ...state,
        announcements: action.announcements,
        dues: action.dues,
      };
    }

    default: {
      return state;
    }
  }
};
