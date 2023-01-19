import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/navbar/Navbar.js';
import Intro from '../../components/intro/Intro.js';
// import Card from '../../components/card/Card.js';

const Home = () => {
  return (
    <main className='main'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='wrapper'>
          <Intro />
          <div className='cards'>
            {/* <Card><AnnouncementsWidget /></Card> */}
            {/* <Card><AnnouncementsWidget /></Card> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
