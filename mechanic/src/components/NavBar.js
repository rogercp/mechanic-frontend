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
                <Button>
                     Hub
                </Button>
                
            </Link>
            <Link to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">
                <Button>
                     chat
                </Button>
                
            </Link>
            <Link to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                <Button>
                    Settings
                </Button>
            </Link>
            
            <Button onClick={logout}>
                     logout
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
