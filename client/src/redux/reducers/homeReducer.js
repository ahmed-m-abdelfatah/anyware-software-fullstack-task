import axiosRequest from '../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../utils/api_request/axios_service_objects.js';
import * as actionTypes from '../actionTypes.js';

const initState = {
  announcements: [],
  dues: [],
};

export const countReducer = async (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANNOUNCEMENTS_FROM_API: {
      const res = await axiosRequest(axiosServiceObj.getAllAnnouncements());

      return {
        ...state,
        announcements: state.count + action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
