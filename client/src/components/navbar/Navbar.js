import './Navbar.scss';
import avatar from '../../img/undraw_pic_profile_re_7g2h.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { sidebarToggler } from '../../redux/actionGenerators/sidebarGenerators.js';

export const Navbar = props => {
  return (
    <nav className='nav'>
      <div className='row'>
        <button className='sidebar-controller-icon' onClick={() => props.toggleSidebar()}>
          <FontAwesomeIcon size='xl' icon={faBars} />
        </button>

        <h2 className='welcome'>welcome,talia</h2>
      </div>

      <div className='row'>
        <Search />

        <div className='icons'>
          <Icon num='2' icon={faBell} />
          <Icon num='3' icon={faEnvelope} />
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  active: state.sidebarReducer.active,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(sidebarToggler()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

function Search() {
  return (
    <div className='search'>
      <FontAwesomeIcon className='search-icon' size='sm' icon={faSearch} />
      <input type='search' name='search' placeholder='search...' autoComplete='off' />
    </div>
  );
}

function Icon(props) {
  return (
    <span className='icon'>
      <span className='number'>{props.num}</span>
      <FontAwesomeIcon size='xl' icon={props.icon} />
    </span>
  );
}
