
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link, withRouter } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import ProfileImageShow from './ProfileImageShow';
import { fetchProfileImage } from "../store/actions/settingsActions";
import ImageIcon from '@material-ui/icons/Image';


import '../styles/navbar.scss'
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  list: {
    width: 200,
    margin: '20px',
    display: 'block',
  },
  fullList: {
    width: 'auto',

  },
});



function NavBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    isCirclePic: true
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
        <div>
          {props.userImage && props.userImage.length > 0 ?
            <div style={{ width: "10px" }}>
              {props.userImage.map((image, index) => {
                return <ProfileImageShow isCirclePic={state.isCirclePic} image={image} key={index} />
              })}
            </div>

            :
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <ImageIcon style={{ fontSize: "50px" }} />
              {username}
            </div>
          }
        </div>
        <Link className="link_mobile" activeClassName="activeNavButton" to="/home" style={{ textDecoration: "none" }} data-testid="signup-link">
          <div className="mobile_div" ><HomeIcon />Dash</div></Link>

        <Link className="link_mobile" activeClassName="activeNavButton" to="/chat" style={{ textDecoration: "none" }} data-testid="signup-link">
          <ChatBubbleIcon /> Chat</Link >
        <Link className="link_mobile" activeClassName="activeNavButton" to="/mycars" style={{ textDecoration: "none" }} data-testid="signup-link">
          <DirectionsCarIcon /> Cars</Link>
        <Link className="link_mobile" activeClassName="activeNavButton" to="/settings" style={{ textDecoration: "none" }} data-testid="login-link">
          <SettingsIcon /> Settings</Link>
        <Link className="link_mobile" activeClassName="activeNavButton" to="/landing" style={{ textDecoration: "none" }} data-testid="signup-link"
          onClick={logout}><ExitToAppIcon className="icon" /> Logout</Link>

      </List>

    </div>
  );

  const userId = localStorage.getItem('id');
  const username = localStorage.getItem("username");

  useEffect(() => {

    props.fetchProfileImage(userId)

  }, []);


  if (!localStorage.getItem("token")) {
    return (
      <div className="nav" style={{ backgroundColor: "rgb(210, 210, 211)", maxWidth: "1300px" }}>
        <NavLink id="link" to="/login" activeClassName="active" data-testid="signup-link">
          <i style={{ float: "right" }}>Login</i>
        </NavLink >
      </div>
    )
  } else {
    return (
      <>


        <div className="nav" style={{ backgroundColor: "", maxWidth: "1300px" }}>

          <div>
            {props.userImage && props.userImage.length > 0 ?
              <div style={{ width: "10px" }}>
                {props.userImage.map((image, index) => {
                  return <ProfileImageShow isCirclePic={state.isCirclePic} image={image} key={index} />
                })}
              </div>

              :
              <div>
                <ImageIcon style={{ fontSize: "50px" }} />
                {username}
              </div>
            }
          </div>

          <div className="links" >

            <NavLink id="link" to="/home" activeClassName="active" style={{ textDecoration: "none" }} data-testid="signup-link">
              <i>Dash</i>
            </NavLink>

            <NavLink id="link" to="/chat" activeClassName="active" style={{ textDecoration: "none" }} data-testid="signup-link">
              <i>Chat</i>
            </NavLink >

            <NavLink id="link" to="/mycars" activeClassName="active" style={{ textDecoration: "none" }} data-testid="signup-link">
              <i>My Cars</i>
            </NavLink>

            <NavLink id="link" to="/settings" activeClassName="active" style={{ textDecoration: "none" }} data-testid="login-link">
              <i>Settings</i>
            </NavLink>

            <NavLink id="link" to="/landing" activeClassName="active" style={{ textDecoration: "none" }} data-testid="signup-link"
              onClick={logout}>
              <i>Logout</i>
            </NavLink>

          </div>

        </div>


        <div className="mobile" >

          <div style={{ width: "100%", position: "fixed" }}>
            {/* display:inline-block  --- this will work for a non-sticky navbar */}
            <Button style={{ float: "right", marginTop: "20px", display: "block" }} onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
          </div>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}

          </Drawer>
        </div>









      </>
    )
  }
};


const mapStateToProps = state => ({
  userImage: state.setting.userImage
});
export default connect(
  mapStateToProps,
  { fetchProfileImage }
)(NavBar);
