/**
 * Dependencies
 */

import React from 'react';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';


/**
 * Import styles
 */



/**
 * Define component
 */

function Home(props) {


    return (

        <>
        <h1>Home</h1>
      <NavLink to="/settings"><Button>Settings</Button></NavLink>

        </>
       )
}

/**
 * Export component
 */

export default Home;
