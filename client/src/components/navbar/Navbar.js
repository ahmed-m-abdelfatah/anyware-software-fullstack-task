import './Navbar.scss';
import avatar from '../../img/undraw_pic_profile_re_7g2h.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='row'>
        <button className='icon'>
          <FontAwesomeIcon size='xl' icon={faBars} />
        </button>

        <h2 className='welcome'>welcome,talia</h2>
      </div>

      <div className='row'>
        <div className='search'>
          <FontAwesomeIcon className='search-icon' size='sm' icon={faSearch} />
          <input type='search' name='search' placeholder='search...' autocomplete='off' />
        </div>

        <div className='icons'>
          <span className='icon'>
            <span className='number'>2</span>
            <FontAwesomeIcon size='xl' icon={faBell} />
          </span>
          <span className='icon'>
            <span className='number'>3</span>
            <FontAwesomeIcon size='xl' icon={faEnvelope} />
          </span>
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
