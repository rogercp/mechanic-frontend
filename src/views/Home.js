/**
 * Dependencies
 */

import React from 'react';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import { DashSideNav } from '../components';
import { Posts, Question, Search} from '../components';



/**
 * Import styles
 */



/**
 * Define component
 */

function Home(props) {


    return (

        <>
        <DashSideNav/>  
        <div style={{marginTop:"100px"}}>
        <div>
        </div> 
        <div style={{}}>
        <Question/>
        <Search/>
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
