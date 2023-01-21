import './Registration.scss';
import SignupForm from '../../components/forms/signup/SignupForm.js';

const Registration = () => {
  return (
    <main className='registration'>
      <section className='wrapper'>
        <SignupForm />
      </section>
    </main>
  );
};

export default Registration;
