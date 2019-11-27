import React from 'react';
import uuid from 'uuid';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import './App.css';
import { loggedInRoutes, UsersRouter } from './routes/index';
import {
  NoMatch
} from './views';

function App() {

  if(localStorage.getItem('token')){
    return (
      <div>
      <BrowserRouter>
        <NavBar className="navbar"/>
            <Switch>
              {loggedInRoutes}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>
      </div>
    )


  }else{
    return (
      <div>
      <BrowserRouter>
            <Switch>
              {UsersRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>
      </div>
    )
  }
    
}
  


/**
 * Export component
 */


export default App;
