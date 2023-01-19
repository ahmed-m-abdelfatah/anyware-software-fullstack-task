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
} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = props => {
  return (
    <aside className={props.active === true ? 'sidebar active' : 'sidebar'}>
      <div className='close'>
        <button onClick={() => props.toggleSidebar()}>close x</button>
      </div>
      <h3>Coligo</h3>
      <ul>
        <li>
          <a className='active' href='./#'>
            <FontAwesomeIcon size='xl' icon={faHouseChimney} />
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a href='./#'>
            <FontAwesomeIcon size='xl' icon={faCalendarDays} />
            <span>Schedule</span>
          </a>
        </li>

        <li>
          <a href='./#'>
            <FontAwesomeIcon size='xl' icon={faBook} />
            <span>Courses</span>
          </a>
        </li>

        <li>
          <a href='./#'>
            <FontAwesomeIcon size='xl' icon={faGraduationCap} />
            <span>Grade book</span>
          </a>
        </li>

        <li>
          <a href='./#'>
            <FontAwesomeIcon size='xl' icon={faChartLine} />
            <span>Performance</span>
          </a>
        </li>

        <li>
          <a href='./#'>
            <FontAwesomeIcon size='xl' icon={faBullhorn} />
            <span>Announcement</span>
          </a>
        </li>
      </ul>
    </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
