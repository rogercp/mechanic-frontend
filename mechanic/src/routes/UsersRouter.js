/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {
    Login, Landing,
  } from '../views/index';

/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} exact path='/register' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} exact path='/landing' render={props => <Landing {...props} />}/>,
 
];

/**
 * Export router
 */

export default UsersRouter;
