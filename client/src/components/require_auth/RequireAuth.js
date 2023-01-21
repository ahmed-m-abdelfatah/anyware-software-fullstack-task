import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as paths from '../../paths.js';

export const RequireAuth = props => {
  if (props.currentUser) {
    return props.children;
  } else {
    return <Navigate to={paths.REGISTRATION_PATH} />;
  }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
