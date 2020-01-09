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

        <div style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px",paddingBottom:"300px"}}>
        
        <div>

        <div style={{display:"flex", flexDirection:"row",padding:"10px 0"}}>
        <div>
        <Question/> 
        </div>

        <div>
            <Search/>
        </div>

       

        </div>
         </div>

        <div>
                <DashSideNav/>  
                
        </div>


       


        </div>
       )
}

/**
 * Export component
 */

export default Home;
