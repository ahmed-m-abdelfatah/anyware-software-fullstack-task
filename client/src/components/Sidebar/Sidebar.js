import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <h3>Coligo</h3>
      <p>
        close <img src={require('../../img/xmark-solid.svg').default} alt='mySvgImage' />
      </p>
      <ul>
        <li>
          <a href='./#'>
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
