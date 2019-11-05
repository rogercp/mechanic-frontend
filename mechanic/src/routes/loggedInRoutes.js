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
    <PrivateRoute key={uuid.v4()} exact path='/home'
    component={UserCaseShow}
    errorBoundary={ErrorBoundary}
/>
  
];

/**
 * Export router
 */

export default UsersRouter;