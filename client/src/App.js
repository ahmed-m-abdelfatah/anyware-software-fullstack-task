import './styles/style.scss';
import { Route, Routes } from 'react-router-dom';
import * as paths from './paths.js';

import Home from './pages/home/Home.js';
import Registration from './pages/registration/Registration.js';
import NotFound from './pages/not_found/NotFound.js';

const App = () => {
  return (
    <Routes>
      <Route path={paths.REGISTRATION_PATH} element={<Registration />} />
      <Route path={paths.HOME_PATH} element={<Home />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
