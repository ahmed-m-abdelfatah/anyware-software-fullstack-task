import './Sidebar.scss';
import { connect } from 'react-redux';
import { sidebarToggler } from '../../redux/actionGenerators/sidebarGenerators.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faCalendarDays,
  faBook,
  faGraduationCap,
  faChartLine,
  faBullhorn,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import * as paths from '../../paths.js';
import { deleteUserTokenFromBrowserStorage } from '../../redux/actionGenerators/authGenerators.js';
import axiosRequest from '../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../utils/api_request/axios_service_objects.js';

export const Sidebar = props => {
  const handelLogout = async e => {
    e.preventDefault();
    const res = await axiosRequest(axiosServiceObj.logout());

    if (res.status === 200) {
      props.deleteUserTokenFromBrowserStorage();
    }
  };

  return (
    <aside className={props.active === true ? 'sidebar active' : 'sidebar'}>
      <div className='close'>
        <button onClick={() => props.toggleSidebar()}>close x</button>
      </div>
      <h3>
        <Link to={paths.HOME_PATH}>Coligo</Link>
      </h3>
      <ul>
        <SidebarLink link={paths.HOME_PATH} name={'Dashboard'} icon={faHouseChimney} />
        <SidebarLink link={paths.SCHEDULE_PATH} name={'Schedule'} icon={faCalendarDays} />
        <SidebarLink link={paths.COURSES_PATH} name={'Courses'} icon={faBook} />
        <SidebarLink link={paths.GRADE_BOOK_PATH} name={'Grade book'} icon={faGraduationCap} />
        <SidebarLink link={paths.PERFORMANCE_PATH} name={'Performance'} icon={faChartLine} />
        <SidebarLink link={paths.ANNOUNCEMENT_PATH} name={'Announcement'} icon={faBullhorn} />

        <li>
          <a href='./#' onClick={handelLogout}>
            <FontAwesomeIcon size='xl' icon={faRightFromBracket} />
            <span>logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

function SidebarLink(props) {
  return (
    <li>
      <NavLink to={props.link}>
        <FontAwesomeIcon size='xl' icon={props.icon} />
        <span>{props.name}</span>
      </NavLink>
    </li>
  );
}

const mapStateToProps = state => ({
  active: state.sidebarReducer.active,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(sidebarToggler()),
    deleteUserTokenFromBrowserStorage: () => dispatch(deleteUserTokenFromBrowserStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
