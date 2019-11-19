import uuid from 'uuid';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import './App.css';
import { UserRouter, Routes } from './routes/index';
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
              {UserRouter}
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
              {Routes}
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
