

import React from 'react';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import { DashSideNav } from '../components';
import { Posts, Question, Search} from '../components';




import  '../styles/home.scss'



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


        <div className="web" style={{display:"flex", flexDirection:"row",width:"100%"}}>
        <div style={{minWidth:"30%"}}>
        <DashSideNav/> 
        </div>
        <div style={{minWidth:"70%"}}>
        <Posts/>
        </div>
        </div>

        <div className="mobile">
        <div >
        <DashSideNav/> 
        </div>
        <div style={{margin:"0 auto"}} >
        <Posts/>
        </div>

        </div>

        </div>
       )
}


export default Home;
