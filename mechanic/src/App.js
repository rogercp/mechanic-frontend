import uuid from 'uuid';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { UsersRouter } from './routes/index';

function App() {

  if (localStorage.getItem('token')) {
    return (
      <>
      <BrowserRouter>
        
            <Switch>
              <Route key={uuid.v4()} exact path='/' render={() => <Redirect to='/cases' />}/>,
              {UsersRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
        
      </BrowserRouter>

      </>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route key={uuid.v4()} exact path='/' component={Landing} />,
          <Route key={uuid.v4()} exact path='/auth' component={Login} />,
          <Route key={uuid.v4()} component={NoMatch} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

/**
 * Export component
 */


export default App;
