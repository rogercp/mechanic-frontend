
import React from 'react';
import uuid from 'uuid';
import { PrivateRoute } from './helpers/index';
import {
  Home,
  UserSettings, ErrorBoundary, UserCars
} from '../views/index';



const loggedInRoutes = [
  <PrivateRoute key={uuid.v4()} exact path='/home'
    component={Home} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} exact path='/settings'
    component={UserSettings} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} exact path='/mycars'
    component={UserCars} errorBoundary={ErrorBoundary} />

];


export default loggedInRoutes;