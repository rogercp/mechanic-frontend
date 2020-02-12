import React from 'react';
import uuid from 'uuid';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
import { loggedInRoutes, UsersRouter } from './routes/index';
import {
  NoMatch,
  Home
} from './views';

import  './styles/navbar.scss'

function App() {
// console.log(process.env)

  if(localStorage.getItem('token')){
    return (
      <div className="outerapp">
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
      <div className="outerapp">
      
      <BrowserRouter>
      <div className="nav" style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px"}}>
      <NavLink id="link" to="/login" activeClassName="active"  style={{textDecoration:"none"}} data-testid="signup-link">   
                  <i>Login</i>
        </NavLink >
      </div>
            <Switch>
            <Route key={uuid.v4()} exact path='/' component={Home} />,
              {UsersRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>
      
      </div>
    )
  }
    
}
  




export default App;
