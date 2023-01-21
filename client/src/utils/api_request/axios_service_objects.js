import { getFromStorage, keys } from '../browser_storage/local_storage.js';

const baseUrl = `https://anyware-software-fullstack-task-api.onrender.com/api`;

const getToken = () => {
  // get token more than one
  if (typeof window != 'undefined') {
    // console.log('process.env', process.env);
    return process.env.REACT_APP_BEARER_SECRETE + ' ' + getFromStorage(keys.token);
  }
};

const signup = body => ({
  method: 'POST',
  url: `${baseUrl}/auth/signup`,
  data: body,
});

const login = body => ({
  method: 'POST',
  url: `${baseUrl}/auth/login`,
  data: body,
});

const logout = () => ({
  method: 'POST',
  url: `${baseUrl}/auth/logout`,
  headers: {
    Authorization: getToken(),
  },
});

const getAllAnnouncements = () => ({
  method: 'GET',
  url: `${baseUrl}/announcement/`,
  headers: {
    Authorization: getToken(),
  },
});

const getAllDues = () => ({
  method: 'GET',
  url: `${baseUrl}/due/`,
  headers: {
    Authorization: getToken(),
  },
});

const axiosServiceObj = {
  signup,
  login,
  logout,
  getAllAnnouncements,
  getAllDues,
};

export default axiosServiceObj;
