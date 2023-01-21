import './Registration.scss';
import { useState } from 'react';
import SignupForm from '../../components/forms/signup/SignupForm.js';
import SigninForm from '../../components/forms/signin/SigninForm.js';

const Registration = () => {
  const [newAccount, setNewAccount] = useState(false);

  return (
    <main className='registration'>
      <section className='wrapper'>
        {newAccount === true ? (
          <SignupForm setNewAccount={setNewAccount} />
        ) : (
          <SigninForm setNewAccount={setNewAccount} />
        )}
      </section>
    </main>
  );
};

export default Registration;
