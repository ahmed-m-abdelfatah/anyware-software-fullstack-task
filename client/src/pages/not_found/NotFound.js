import './NotFound.scss';
import { Link } from 'react-router-dom';
import * as paths from '../../paths.js';

const NotFound = () => {
  return (
    <main className='not-found'>
      <p>404 Not Found</p>
      <Link to={paths.HOME_PATH}>Go to home</Link>
    </main>
  );
};

export default NotFound;
