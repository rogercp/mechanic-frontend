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
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import { useMediaQuery } from 'react-responsive'
/**
 *  Import styles
 */

import  '../styles/navbar.scss'

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


function NavBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const isPhone = useMediaQuery({
    query: '(max-device-width: 500px)'
  })
  const isNotPhone = useMediaQuery({
    query: '(min-device-width: 500px)'
  })
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


   

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    > 
      <List className="list" >

         <Link className="link_mobile"  activeClassName="activeNavButton" to="/home" style={{textDecoration:"none"}} data-testid="signup-link">
         <div className="mobile_div" ><HomeIcon/>Dash</div></Link>
               
          <Link className="link_mobile" activeClassName="activeNavButton" to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">   
          <ChatBubbleIcon/> Chat</Link >
          <Link className="link_mobile"  activeClassName="activeNavButton" to="/mycars" style={{textDecoration:"none"}} data-testid="signup-link">
                <DirectionsCarIcon/> Cars</Link>
          <Link className="link_mobile" activeClassName="activeNavButton" to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                <SettingsIcon/> Settings</Link>
          <Link className="link_mobile" activeClassName="activeNavButton" to="/landing" style={{textDecoration:"none"}} data-testid="signup-link"
            onClick={logout}><ExitToAppIcon className="icon" /> Logout</Link>
  
      </List>
      
    </div>
  );
  


  function logout() {
    localStorage.clear()
    window.location = '/'
  }

    return (
      <>
        
        {isNotPhone &&
        <nav className="nav" >
            <div className="links">

              <NavLink className="link"  activeClassName="activeNavButton" to="/home" style={{textDecoration:"none"}} data-testid="signup-link">
                  <i>DASH</i>
              </NavLink>

              <NavLink className="link" activeClassName="activeNavButton" to="/chat" style={{textDecoration:"none"}} data-testid="signup-link">   
                  <i>CHAT</i>
              </NavLink >
                  
              <NavLink className="link"  activeClassName="activeNavButton" to="/mycars" style={{textDecoration:"none"}} data-testid="signup-link">
                  <DirectionsCarIcon/>
              </NavLink>

              <NavLink className="link" activeClassName="activeNavButton" to="/settings" style={{textDecoration:"none"}} data-testid="login-link">
                  <SettingsIcon/>
              </NavLink>
              
              <NavLink className="link" activeClassName="activeNavButton" to="/landing" style={{textDecoration:"none"}} data-testid="signup-link"
              onClick={logout}>
                  <ExitToAppIcon className="icon" />
              </NavLink>

            </div>
            </nav>
            }
        {isPhone &&
        
            <>
              <Button style={{float:"right"}} onClick={toggleDrawer('right', true)}><MoreVertIcon /></Button>
              <Drawer   anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                  {sideList ('right')}

              </Drawer>
            </>
           
            
                     
        }
        
            
        
        

      </>
    );
};

/**
 * Export component
 */

export default NavBar;
