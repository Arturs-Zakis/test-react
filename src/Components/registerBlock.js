import React from 'react';
import Input from './input';
import Button from './button';

const RegisterBlock = () => {
  return (
    <div className='register-container'>
      <div className='input-container'>
        <form>
          <h1>Register</h1>
          <Input type='email' inputLabel='E-mail' />
          <Input type='password' inputLabel='Password' />
          <Button type='submit'>Log in</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBlock;
