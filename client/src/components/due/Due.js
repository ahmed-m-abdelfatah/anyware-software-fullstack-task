import './Due.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faClipboardCheck, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';

const Quiz = props => {
  return (
    <div className='due'>
      <h4 className='title'>
        <span className='icon'>
          {props.type === 'quiz' ? (
            <FontAwesomeIcon size='xl' icon={faHourglassHalf} />
          ) : (
            <FontAwesomeIcon size='xl' icon={faClipboardCheck} />
          )}
        </span>
        {props.title}
      </h4>

      <ul className='list'>
        <li>Course: {props.list.course}</li>
        <li>Topic: {props.list.topic}</li>
        <li>Due Date: {props.list.dueDate}</li>
      </ul>

      <button className='button'>{props.type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'}</button>
    </div>
  );
};

export default Quiz;
