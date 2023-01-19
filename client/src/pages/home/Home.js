import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/navbar/Navbar.js';
import Intro from '../../components/intro/Intro.js';
import Card from '../../components/card/Card.js';
import Announcement from '../../components/announcement/Announcement.js';
import Due from '../../components/due/Due.js';

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
              <Due type='quiz' title='unit 2 quiz' list={{ course: 'physics02', topic: 'lorem', dueDate: 'lorem' }} />
              <Due
                type='assignment'
                title='12 - 12 Assignment'
                list={{ course: 'arabic k12', topic: 'الوحدة الثانية', dueDate: 'lorem' }}
              />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
