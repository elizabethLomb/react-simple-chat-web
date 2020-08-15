import React from 'react';
import { Input } from '../UI/Forms/Input';
import { Button } from '../UI/Forms/Button';
import '../Login/Login.scss'

export const Login = () => {
  return (
    <div className="Login col-4 p-5 rounded">
      <form className="Login-form">
        <Input type='email' name='email' placeholder='Email' sizeInput='form-control-lg' />
        <Input type='password' name='password' placeholder='Password' sizeInput='form-control-lg' />
        <Button
          type='submit'
          text='Sing In'
          btnColor='btn-primary'
          btnSize='btn-lg btn-block'
        />
      </form>
    </div>
  );
};