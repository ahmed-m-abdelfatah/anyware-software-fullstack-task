import RequireAuth from '../../components/require_auth/RequireAuth.js';
import Home from './Home.js';

const HomeAuth = () => {
  return (
    <RequireAuth>
      <Home />
    </RequireAuth>
  );
};

export default HomeAuth;
