/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import {
  Home,
  AuthCallBack,ErrorBoundary
  } from '../views/index';

/**
 * Define router
 */

const UserRouter = [
    <PrivateRoute key={uuid.v4()}  exact path='/home'
    component={Home}  errorBoundary={ErrorBoundary} />
   

  
];

/**
 * Export router
 */

export default UserRouter;