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
      <>
      <BrowserRouter>
        <NavBar/>
            <Switch>
              {UserRouter}
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
              {Routes}
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
