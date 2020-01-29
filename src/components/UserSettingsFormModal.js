import ProfileImageUpload from './ProfileImageUpload';
import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { axiosWithAuth } from '../helpers/index';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      Width: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));


function UserSettingsFormModal(props) {
  
    const classes = useStyles();


    const [state, setState] = React.useState({
        car_type: '',
        
      });
    
      const handleChange = name => event => {
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


      const onSubmitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(``, state)
            .then(res => {  
                window.location.reload();
            })
            .catch(err => {      
            });
    };


    const onSubmitDeleteAccount = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(``, state)
            .then(res => {  
                window.location.reload();
            })
            .catch(err => {      
            });
    };


    return (
      <>
        <div >
        <ProfileImageUpload/>

        <div style={{maxWidth:"100px"}}>
        <TextField
          id="standard-basic"
          name="car_make"
          className={classes.textField}
          label="username"
          margin="normal"
          value={state.car_make}
          onChange={handleChange('car_make')}
        /></div>
        

        </div>
      </>
    );
};

export default UserSettingsFormModal;
