/**
 * Dependencies
 */

import React from 'react';
import {Image,roundedCircle} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/**
 * Import styles
 */



/**
 * Define component
 */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

 function UserSettings(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{maxWidth:"1300px"}}>
    <div style={{width:"20%",height:"100vh",backgroundColor:"rgb(210, 210, 211)"}}>
    <p>profile</p>
    <p>account</p>
    </div>
    <div style={{width:"80%",height:"100vh",textAlign:"center"}}>
    <h2>User Settings</h2>
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80" className={classes.large} />

    </div>
        
     
    </div>
  );
 }
/**
 * Export component
 */
export default UserSettings;