/**
 * Dependencies
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
/**
 *  Import styles
 */

import  '../styles/navbar.scss'

/**
 * Define component
 */

function NavBar(props) {

  function logout() {
    localStorage.clear()
    window.location = '/'
  }

    return (
      <>
        <nav className="nav" >
            <div className="links">

            
            <NavLink className="link"  activeClassName="activeNavButton" to="/home" style={{textDecoration:"none"}} data-testid="signup-link">
                <i>HUB</i>

            </NavLink>

            <NavLink className="link" activeClassName="activeNavButton" to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">   
                <i>CHAT</i>
            </NavLink >
                
            <NavLink className="link"  activeClassName="activeNavButton" to="/mycars" style={{textDecoration:"none"}} data-testid="signup-link">
                <DirectionsCarIcon/>
            </NavLink>

            <NavLink className="link" activeClassName="activeNavButton" to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                <SettingsIcon/>
            </NavLink>
            
            <NavLink className="link" activeClassName="activeNavButton" to="/landing" style={{textDecoration:"none"}} data-testid="signup-link"
            onClick={logout}>
                <ExitToAppIcon className="icon" />
            </NavLink>
            </div>
        </nav>
        

      </>
    );
};

/**
 * Export component
 */

export default NavBar;
