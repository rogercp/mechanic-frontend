import uuid from 'uuid';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { UsersRouter, loggedInRoutes } from './routes/index';
import {
  NoMatch
} from './views';

function App() {

  if(localStorage.getItem('token')){
    return (
      <>
      <BrowserRouter>
        
            <Switch>
              {loggedInRoutes}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>
      </>
    )


  }else{
    return (
      <>
      <BrowserRouter>
        
            <Switch>
              {UsersRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>
      </>
    )
  }
    
  }
  


/**
 * Export component
 */


export default App;
