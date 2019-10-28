/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';


/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/users' render={() => <Redirect to='/' />} />,
  <Route key={uuid.v4()} path='/users/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} path='/users/register' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} path='/users/settings' render={(props) => <Settings {...props} />} />,
];

/**
 * Export router
 */

export default UsersRouter;
