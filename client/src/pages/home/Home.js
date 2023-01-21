import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/navbar/Navbar.js';
import Intro from '../../components/intro/Intro.js';
import Card from '../../components/card/Card.js';
import Announcement from '../../components/announcement/Announcement.js';
import Due from '../../components/due/Due.js';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import axiosRequest from '../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../utils/api_request/axios_service_objects.js';
import { getData } from '../../redux/actionGenerators/homeGenerators.js';

export const Home = props => {
  useEffect(() => {
    const getData = async () => {
      const res1 = await axiosRequest(axiosServiceObj.getAllAnnouncements());
      const res2 = await axiosRequest(axiosServiceObj.getAllDues());

      if ((res1.status = res2.status === 200)) {
        props.getData({
          announcements: res1.data,
          dues: res2.data,
        });
      }
    };

    getData();
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
              {!props.announcements
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
              {!props.dues
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

const mapStateToProps = state => ({
  announcements: state.homeReducer.announcements,
  dues: state.homeReducer.dues,
});

const mapDispatchToProps = dispatch => {
  return {
    getData: payload => dispatch(getData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
