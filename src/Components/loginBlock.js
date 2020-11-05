import React, { useState } from 'react';

import Input from './input';

import Button from './button';

const LoginForm = ({ setIsLogin }) => {
  return (
    <div className='login-container'>
      <div className='input-container'>
        <form>
          <h1>Login</h1>
          <Input type='email' inputLabel='E-mail' />
          <Input type='password' inputLabel='Password' />
          <Button type='submit' className='btn'>
            Log in
          </Button>
          <p>
            Don't have an account yet? Dont worry and
            <Button
              type='button'
              className='btn-link'
              onClick={() => setIsLogin(false)}
            >
              register here.
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

const RegisterForm = ({ setIsLogin }) => {
  return (
    <div className='login-container'>
      <div className='input-container'>
        <form>
          <h1>Register</h1>
          <Input type='email' inputLabel='E-mail' />
          <Input type='password' inputLabel='Password' />
          <Button type='submit' className='btn'>
            Register
          </Button>
          <p>
            Already have an account?
            <Button
              type='button'
              className='btn-link'
              onClick={() => setIsLogin(true)}
            >
              log in here.
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

const LoginBlock = () => {
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return <LoginForm setLogin={setIsLogin} />;
  }
  return <RegisterForm seyLogin={setIsLogin} />;
};

export default LoginBlock;
