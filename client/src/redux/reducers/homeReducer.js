import axiosRequest from '../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../utils/api_request/axios_service_objects.js';
import { getData } from '../actionGenerators/homeGenerators.js';
import * as actionTypes from '../actionTypes.js';

const initState = {
  announcements: [],
  dues: [],
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET__HOME_PAGE_DATA_FROM_API: {
      return {
        ...state,
        announcements: action.payload.announcements,
        dues: action.payload.dues,
      };
    }

    default: {
      return state;
    }
  }
};
