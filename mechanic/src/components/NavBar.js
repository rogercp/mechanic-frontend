/**
 * Dependencies
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

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

            
            <NavLink  activeClassName="activeNavButton" to="/home" style={{textDecoration:"none"}} data-testid="signup-link">
                <button variant="dark" className="link">
                     HUB
                </button>
            </NavLink>

            <NavLink activeClassName="activeNavButton" to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">
                <button variant="dark" className="link">
                     CHAT
                </button>
                
            </NavLink >
            <NavLink activeClassName="activeNavButton" to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                <button variant="dark" className="link">
                    SETTINGS
                </button>
            </NavLink>
            
           

            <NavLink activeClassName="activeNavButton" to="/mycars" style={{textDecoration:"none"}} data-testid="signup-link">
                <button variant="none"className="link">
                     MY CARS
                </button>
                
            </NavLink>
                
            <button variant="dark" onClick={logout} className="link">
                     LOGOUT
            </button>

            </div>
        </nav>
        

      </>
    );
};

/**
 * Export component
 */

export default NavBar;
