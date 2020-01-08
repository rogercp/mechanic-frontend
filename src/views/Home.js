/**
 * Dependencies
 */

import React from 'react';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import { DashSideNav } from '../components';
import { Posts } from '../components';


/**
 * Import styles
 */



/**
 * Define component
 */

function Home(props) {


    return (

        <>
        <div>
        <div>
        <DashSideNav/>  
        </div> 
        <Posts/>
         </div>


        </>
       )
}

/**
 * Export component
 */

export default Home;
