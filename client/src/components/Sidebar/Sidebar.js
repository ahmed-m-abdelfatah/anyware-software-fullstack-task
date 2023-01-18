import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faCalendarDays,
  faBook,
  faGraduationCap,
  faChartLine,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
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

export default Sidebar;
