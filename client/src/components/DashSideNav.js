
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


import  '../styles/dashsidenav.scss'




function DashSideNav(props) {
  const [state, setState] = React.useState({
    right: false,
  });
  
 

    return (
      <>
        <div className="mobile2" style={{width: '100%'}}>
            <div className="wrapper" >
            
            <section className="horizontal-scroll">
            <p className="item">Maintence</p>
            <p className="item">Mods</p>
            <p className="item">Repairs</p>
            <p className="item">Tips</p>
            

            </section>




            </div>

        </div>
           


<div style={{display:"flex", flexDirection:"row"}}>
            <div className="sideNav" style={{width:"200px",height:"500px",}}>
           <section style={{display:"flex", flexDirection:"column"}}>
           <p className="item">Maintence</p>
            <p className="item">Mods</p>
            <p className="item">Repairs</p>
            <p className="item">Tips</p>
            
   
           </section>

         
   
   
   
   
           </div>

           

    </div>
          

      </>
    );
};



export default DashSideNav;
