import './Button.scss';

const Button = props => {
  return <button className={`button ${props.full && 'w-100'} ${props.fill && 'fill'}`}>{props.children}</button>;
};

export default Button;
