import './styles/style.scss';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home.js';
import Registration from './pages/registration/Registration.js';

const App = () => {
  return (
    <Routes>
      <Route path={homePath}>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={loginPath} element={<Registration />} />

        <Route path='*' element={<NotFound setNotFound={setNotFound} />} />
      </Route>
    </Routes>
  );
};

export default App;
