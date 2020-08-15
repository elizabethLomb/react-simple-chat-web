import React from 'react';
import { Input } from '../UI/Forms/Input';
import { Button } from '../UI/Forms/Button';

export const Login = () => {
  return (
    <form>
      <Input type='mail' name='email' />
      <Input type='password' name='password' />
      <Button type='submit' text='Sing In' />
    </form>
  );
};