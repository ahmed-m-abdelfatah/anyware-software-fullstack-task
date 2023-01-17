import { connect } from 'react-redux';
import { countChange } from '../redux/actionGenerators/countGenerators.js';

const Count = props => {
  console.log('props', props);

  const plusClick = () => {
    props.changeVal(2);
  };

  const minusClick = () => {
    props.changeVal(-1);
  };

  return (
    <>
      <button onClick={plusClick}>+</button>
      <p>{props.count}</p>
      <button onClick={minusClick}>-</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    count: state.countReducer.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeVal: payload => dispatch(countChange(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
