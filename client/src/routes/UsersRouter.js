

import uuid from 'uuid';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';


import {
    Login, Landing,AuthCallback,ErrorBoundary,Home
  } from '../views/index';



const UsersRouter = [
  <Route key={uuid.v4()} exact path='/login' render={props => <Login {...props} />}/>,
  <Route key={uuid.v4()} exact path='/register' render={props => <Login {...props} />}/>,
  <Route  key={uuid.v4()}  exact path='/landing'
  component={Home}  errorBoundary={ErrorBoundary}/>,
  <PrivateRoute key={uuid.v4()}  path='/auth/callback' component={AuthCallback} errorBoundary={ErrorBoundary}/>
];


export default UsersRouter;
