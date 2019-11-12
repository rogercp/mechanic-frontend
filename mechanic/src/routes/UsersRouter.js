/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';

import {
    Login, Landing,AuthCallBack,ErrorBoundary
  } from '../views/index';

/**
 * Define router
 */

const Routes = [
  <Route key={uuid.v4()} exact path='/' component={Landing} />,
  <Route key={uuid.v4()} exact path='/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} exact path='/register' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} exact path='/landing' render={props => <Landing {...props} />}/>,
  <PrivateRoute key={uuid.v4()}  path='/auth/callback' component={AuthCallBack} errorBoundary={ErrorBoundary}/>
];

/**
 * Export router
 */

export default Routes;
