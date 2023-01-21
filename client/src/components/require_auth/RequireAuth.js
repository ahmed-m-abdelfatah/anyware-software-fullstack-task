import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as paths from '../../paths.js';
import {
  setUserTokenFromApi,
  setUserTokenFromBrowserStorage,
  deleteUserTokenFromBrowserStorage,
} from '../../redux/actionGenerators/authGenerators.js';

export const RequireAuth = props => {
  if (props.token != null) {
    return props.children;
  } else {
    return <Navigate to={paths.REGISTRATION_PATH} />;
  }
};

const mapStateToProps = state => ({
  active: state.authReducer.token,
});

const mapDispatchToProps = dispatch => {
  return {
    setUserTokenFromApi: token => dispatch(setUserTokenFromApi(token)),
    setUserTokenFromBrowserStorage: token => dispatch(setUserTokenFromBrowserStorage(token)),
    deleteUserTokenFromBrowserStorage: token => dispatch(deleteUserTokenFromBrowserStorage(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
