/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

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

            
            <Link to="/home" style={{textDecoration:"none"}} data-testid="signup-link">
                <Button  className="link">
                     HUB
                </Button>
                
            </Link>
            <Link to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">
                <Button className="link">
                     CHAT
                </Button>
                
            </Link>
            <Link to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                <Button className="link">
                    SETTINGS
                </Button>
            </Link>
            
           

            <Link to="/mycars" style={{textDecoration:"none"}} data-testid="signup-link">
                <Button className="link">
                     MY CARS
                </Button>
                
            </Link>
                
            <Button onClick={logout} className="link">
                     LOGOUT
            </Button>

            </div>
        </nav>
        

      </>
    );
};

/**
 * Export component
 */

export default NavBar;
