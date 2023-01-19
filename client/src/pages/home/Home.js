import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/navbar/Navbar.js';
import Intro from '../../components/intro/Intro.js';
import Card from '../../components/card/Card.js';
import Announcement from '../../components/announcement/Announcement.js';
import Quiz from '../../components/quiz/Quiz.js';

const Home = () => {
  return (
    <main className='main'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='wrapper'>
          <Intro />

          <div className='cards'>
            <Card title='Announcements' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.'>
              <Announcement />
            </Card>
            <Card title='What is due' description='Lorem ipsum dolor sit amet elit. Dolorem.'>
              <Quiz />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
