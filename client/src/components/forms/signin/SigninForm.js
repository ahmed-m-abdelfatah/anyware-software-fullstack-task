import './SigninForm.scss';
import { useState } from 'react';
import Button from '../../../components/button/Button.js';
import validation from '../../../validation/validation.js';
import * as validators from '../../../validation/validation_schema.js';
import axiosRequest from '../../../utils/api_request/axios_request.js';
import axiosServiceObj from '../../../utils/api_request/axios_service_objects.js';
import { useNavigate } from 'react-router-dom';
import * as paths from '../../../paths.js';

const SigninForm = props => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: '', password: '' });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const clearErrors = () => {
    setIsError(false);
    setErrorMsg(null);
  };

  const handelChange = e => {
    isError && clearErrors();
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    clearErrors();

    //validation
    const validationErrors = validation(user, validators.signup);

    if (validationErrors?.length) {
      // console.log('from front end');
      const errorsMsg = validationErrors.map(error => error.msg);
      setIsError(true);
      setErrorMsg(errorsMsg);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      // console.log('from back end');
      // call the backend
      const res = await axiosRequest(axiosServiceObj.signup(user));

      // handel req errors
      if (res?.response?.status === 405) {
        setIsError(true);
        setErrorMsg([res.response.data.message]);
        setIsLoading(false);
      }

      if (res?.response?.status === 422) {
        const errors = res.response.data.err;
        const errorsMsg = errors.map(error => error.msg);
        setIsError(true);
        setErrorMsg(errorsMsg);
        setIsLoading(false);
      }

      // save user to storage
      // go to home page
      res?.status === 201 && navigate(paths.HOME_PATH);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className='signin-form'>
      <div className='heading'>
        <h1>Sign in</h1>
      </div>
      <form className='form' onSubmit={handelSubmit}>
        {isError && (
          <ul>
            {errorMsg.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <div className='input-control'>
          <input
            type='text'
            name='userName'
            autoComplete='off'
            placeholder='Username starting with @'
            onChange={handelChange}
          />
        </div>

        <div className='input-control'>
          <input type='password' name='password' autoComplete='off' placeholder='Password' onChange={handelChange} />
        </div>

        <div className='input-control'>
          <p>
            Don't have an account <br />
            <span role='button' onClick={() => props.setNewAccount(true)}>
              create new account
            </span>
          </p>
          <Button full fill>
            {isLoading ? 'Loading...' : 'Sign up'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
