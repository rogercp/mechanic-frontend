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

import  '../styles/navbar.scss'

const useStyles = makeStyles({
  list: {
    width: 150,
    margin: '20px',
   display: 'block',
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
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


   
  function logout() {
    localStorage.clear()
    window.location = '/'
  }

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
  



    return (
      <>
        
      
        <div className="nav" style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px"}}>
        <h2 >Mech</h2>
            <div className="links">
           
              <NavLink id="link" to="/home" activeClassName="active"  style={{textDecoration:"none"}} data-testid="signup-link">
                  <i>DASH</i>
              </NavLink>

              <NavLink id="link" to="/chat" activeClassName="active"  style={{textDecoration:"none"}} data-testid="signup-link">   
                  <i>CHAT</i>
              </NavLink >
                  
              <NavLink id="link"  to="/mycars" activeClassName="active"  style={{textDecoration:"none"}} data-testid="signup-link">
                  <DirectionsCarIcon/>
              </NavLink>

              <NavLink id="link" to="/settings" activeClassName="active"  style={{textDecoration:"none"}} data-testid="login-link">
                  <SettingsIcon/>
              </NavLink>
              
              <NavLink id="link" to="/landing" activeClassName="active"  style={{textDecoration:"none"}} data-testid="signup-link"
              onClick={logout}>
                  <ExitToAppIcon className="icon" />
              </NavLink>

            </div>
            </div>
          
            
            <div className="mobile">
              <Button style={{float:"right", marginTop: "10px",}} onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
              <Drawer   anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                  {sideList ('right')}

              </Drawer>
              </div>
          
            
                     
        
        
            
        
        

      </>
    );
};

/**
 * Export component
 */

export default NavBar;
