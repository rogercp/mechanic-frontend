

import React, { useState } from 'react';
import {Image,roundedCircle} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ProfileImageUpload from '../components/ProfileImageUpload'



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
      <div>
   

   <ProfileImageUpload/>
        
     
    </div>
  );
 }

export default UserSettings;