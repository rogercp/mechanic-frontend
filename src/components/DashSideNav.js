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
/**
 *  Import styles
 */

import  '../styles/dashsidenav.scss'

const useStyles = makeStyles({
  list: {
    width: 150,
    margin: '20px',
   
  },
  fullList: {
    width: 'auto',
    
  },
});
/**
 * Define component
 */


function DashSideNav(props) {
  const [state, setState] = React.useState({
    right: false,
  });
  
 

    return (
      <>
        
        <div className="nav" style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px"}}>
           

              <h3>
                  <i>Maintence</i>
              </h3>

              <h3>
                  <i>something</i>
              </h3>

                  
              <h3>
                  <i>other</i>
              </h3>


              <h3>
                  <i>onething</i>
              </h3>

              <h3>
                  <i>calm</i>
              </h3>
              <h3>
                  <i>catt</i>
              </h3>
              <h3>
                  <i>ayyyy</i>
              </h3>



            </div>
          
          

      </>
    );
};

/**
 * Export component
 */

export default DashSideNav;
