/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {
    Login, Landing, NoMatch,
  } from '../views/index';

/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/users' render={() => <Redirect to='/' />} />,
  <Route key={uuid.v4()} path='/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} path='/register' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} path='/landing' render={props => <Landing {...props} />}/>,
 

  
];

/**
 * Export router
 */

export default UsersRouter;
