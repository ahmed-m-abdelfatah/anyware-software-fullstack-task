import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as paths from '../../paths.js';
import {
  setUserTokenFromApi,
  setUserTokenFromBrowserStorage,
  deleteUserTokenFromBrowserStorage,
} from '../../redux/actionGenerators/authGenerators.js';
import { getFromStorage, keys } from '../../utils/browser_storage/local_storage.js';
// import { isTokenStillValid, verifyToken } from '../../utils/token_check.js';

export const RequireAuth = props => {
  // get token from browser storage
  const tokenFromBrowserStorage = getFromStorage(keys.token);
  // let checkTokenFromBrowserStorage;

  if (tokenFromBrowserStorage) {
    // check token valid
    // checkTokenFromBrowserStorage = verifyToken(tokenFromBrowserStorage) && isTokenStillValid(tokenFromBrowserStorage);

    // if (checkTokenFromBrowserStorage === true) {
    return props.children;
    // }
  }

  // if (!tokenFromBrowserStorage || checkTokenFromBrowserStorage === false) {
  if (!tokenFromBrowserStorage) {
    props.deleteUserTokenFromBrowserStorage();
    return <Navigate to={paths.REGISTRATION_PATH} />;
  }

  if (props.token) {
    return props.children;
  } else {
    return <Navigate to={paths.REGISTRATION_PATH} />;
  }
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = dispatch => {
  return {
    setUserTokenFromApi: token => dispatch(setUserTokenFromApi(token)),
    setUserTokenFromBrowserStorage: token => dispatch(setUserTokenFromBrowserStorage(token)),
    deleteUserTokenFromBrowserStorage: () => dispatch(deleteUserTokenFromBrowserStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
