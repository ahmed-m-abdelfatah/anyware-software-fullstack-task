import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/navbar/Navbar.js';
import Intro from '../../components/intro/Intro.js';
import Card from '../../components/card/Card.js';
import Announcement from '../../components/announcement/Announcement.js';
import Due from '../../components/due/Due.js';

import { connect } from 'react-redux';
import { getData } from '../../redux/actionGenerators/homeGenerators.js';
import { useEffect } from 'react';
import axiosRequest from '../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../utils/api_request/axios_service_objects.js';

export const Home = props => {
  console.log('props', props);

  useEffect(() => {
    const getHomePageData = async () => {
      const res1 = await axiosRequest(axiosServiceObj.getAllAnnouncements());
      const res2 = await axiosRequest(axiosServiceObj.getAllDues());

      if (res1.status === 200 && res2.status === 200) {
        props.getData({
          announcements: res1.data.message,
          dues: res2.data.message,
        });
      }
    };
    getHomePageData();
  }, [props]);

  return (
    <main className='home'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='wrapper'>
          <Intro />

          <div className='cards'>
            <Card title='Announcements' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.'>
              {props.announcements.length === 0
                ? '😢 There is no announcements right now.'
                : props.announcements.map(el => {
                    return (
                      <Announcement
                        username='john doe'
                        title='math 101'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.'
                      />
                    );
                  })}
            </Card>
            <Card title='What is due' description='Lorem ipsum dolor sit amet elit. Dolorem.'>
              {props.dues.length === 0
                ? '😎 There is no due tasks right now.'
                : props.dues.map(el => {
                    return (
                      <Due
                        type='assignment'
                        title='12 - 12 Assignment'
                        list={{ course: 'arabic k12', topic: 'الوحدة الثانية', dueDate: 'lorem' }}
                      />
                    );
                  })}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  console.log('state', state);

  return {
    announcements: state.homeReducer.announcements,
    dues: state.homeReducer.dues,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: payload => dispatch(getData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
