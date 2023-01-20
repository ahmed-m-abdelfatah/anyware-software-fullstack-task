import './Intro.scss';
import personalNotebook from '../../img/undraw_personal_notebook_re_d7dc.svg';
import Button from '../button/Button.js';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='text'>
        <h2>Exams Time</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga libero beatae ullam nam, quia tenetur
          reprehenderit itaque voluptas ratione rerum cupiditate possimus in deleniti! Sapiente ex exercitationem
          voluptates magni veritatis.
        </p>

        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam.</span>

        <div>
          <Button fill>view exams tips</Button>
        </div>
      </div>

      <div className='img'>
        <img src={personalNotebook} alt='personalNotebook' />
      </div>
    </div>
  );
};

export default Intro;
