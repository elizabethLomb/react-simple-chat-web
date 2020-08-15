import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';

export const App = () => (
  <div className="App mt-5 pt5 hv-100 d-flex align-items-center justify-content-center">
    <Switch>
      <Route exact path='/login' component={Login} />
    </Switch>
  </div>
);
