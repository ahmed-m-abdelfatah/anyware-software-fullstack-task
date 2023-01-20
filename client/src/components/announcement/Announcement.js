import './Announcement.scss';
import avatar from '../../img/undraw_pic_profile_re_7g2h.svg';

const Announcement = props => {
  return (
    <div className='announcement'>
      <div className='col'>
        <div className='user'>
          <img src={avatar} alt='avatar' />

          <div className='text'>
            <h5 className='name'>{props.username}</h5>
            <p className='name'>{props.title}</p>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className='description'>{props.description}</div>
      </div>
    </div>
  );
};

export default Announcement;
