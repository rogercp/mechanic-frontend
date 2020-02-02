

import React, { useState } from 'react';
import {Image,roundedCircle} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import UserSettingsLayout from '../components/UserSettingsLayout'




 function UserSettings(props) {
 

  return (
      <div style={{textAlign:"center",maxWidth:"1300px"}}>
   <h2>User Settings</h2>

   <UserSettingsLayout/>
         
    </div>
  );
 }

export default UserSettings;