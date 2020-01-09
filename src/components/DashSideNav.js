/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Posts from './Posts';
/**
 *  Import styles
 */

import  '../styles/dashsidenav.scss'


/**
 * Define component
 */


function DashSideNav(props) {
  const [state, setState] = React.useState({
    right: false,
  });
  
 

    return (
      <>
        <div className="mobile2" style={{width: '100%'}}>
            <div className="wrapper" >
            
            <section class="horizontal-scroll">
            <p class="item">Item1</p>
            <p class="item">Item2</p>
            <p class="item">Item3</p>
            <p class="item">Item4</p>
            <p class="item">Item5</p>
            <p class="item">Item1</p>
            <p class="item">Item2</p>
            <p class="item">Item3</p>
            <p class="item">Item4</p>
            <p class="item">Item5</p>
            <p class="item">Item1</p>
            <p class="item">Item2</p>
            <p class="item">Item3</p>
            <p class="item">Item4</p>
            <p class="item">Item5</p>

            </section>




            </div>

        </div>
           


<div style={{display:"flex", flexDirection:"row"}}>
            <div className="sideNav" style={{width:"200px",backgroundColor:"green"}}>
           <section style={{display:"flex", flexDirection:"column"}}>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
           <p class="item">Item</p>
   
           </section>

         
   
   
   
   
           </div>
           
           <Posts/>

    </div>
          

      </>
    );
};

/**
 * Export component
 */

export default DashSideNav;
