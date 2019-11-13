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
      <Button><NavLink to="/settings">Home</NavLink></Button>


        </>
       )
}

/**
 * Export component
 */

export default Home;
