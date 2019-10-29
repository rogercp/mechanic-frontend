/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {
    Login,
  } from '../views/index';

/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/users' render={() => <Redirect to='/' />} />,
  <Route key={uuid.v4()} path='/users/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} path='/users/register' render={props => <Login {...props} />}/>,
];

/**
 * Export router
 */

export default UsersRouter;
