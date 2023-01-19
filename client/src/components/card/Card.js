import './Card.scss';

const Card = props => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__header__text'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className='card__header__btn'>
          <button>All</button>
        </div>
      </div>

      <div className='card__body'>{props.children}</div>
    </div>
  );
};

export default Card;
