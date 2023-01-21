import { getFromStorage, keys } from '../browser_storage/local_storage.js';

const baseUrl = `http://localhost:3030/api`;

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

const getAllAnnouncements = token => ({
  method: 'GET',
  url: `${baseUrl}/announcement/`,
  headers: {
    Authorization: token ? process.env.REACT_PUBLIC_BEARER_SECRETE + ' ' + token : getToken(),
  },
});

const axiosServiceObj = {
  signup,
  login,
  logout,
  getAllAnnouncements,
};

export default axiosServiceObj;
