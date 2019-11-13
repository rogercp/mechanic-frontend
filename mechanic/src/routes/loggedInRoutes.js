/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import {
  Home,
  UserSettings,ErrorBoundary,UserCars
  } from '../views/index';

/**
 * Define router
 */

const UserRouter = [
    <PrivateRoute key={uuid.v4()}  exact path='/home'
    component={Home}  errorBoundary={ErrorBoundary} />,
    <PrivateRoute key={uuid.v4()}  exact path='/settings'
    component={UserSettings}  errorBoundary={ErrorBoundary} />,
    <PrivateRoute key={uuid.v4()}  exact path='/mycars'
    component={UserCars}  errorBoundary={ErrorBoundary} />

];

/**
 * Export router
 */

export default UserRouter;