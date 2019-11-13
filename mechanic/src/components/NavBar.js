/**
 * Dependencies
 */

import React from 'react';


/**
 *  Import styles
 */



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
      <h1>Navbar</h1>
      </>
    );
};

/**
 * Export component
 */

export default NavBar;
