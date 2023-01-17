import './Home.scss';
import Sidebar from '../components/Sidebar/Sidebar.js';
import Content from '../components/Content/Content.js';

const Home = () => {
  return (
    <main className='main'>
      <Sidebar />
      <Content />
    </main>
  );
};

export default Home;
