import ProfileImageUpload from './ProfileImageUpload';
import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { axiosWithAuth } from '../helpers/index';
import Dialog from '@material-ui/core/Dialog';



const useStyles = makeStyles(theme => ({
    dialog: {
        width: '500px',
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: '10px',
    },
    body: {
        paddingBottom: '20px',
    },
}))


function UserSettingsFormModal(props) {
  

    const classes = useStyles();
    const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
    const [state, setState] = React.useState({
        car_type: '',
        
      });
      
      function handleClose() {
          onClose();
      }
  
      function handleClick() {
          props.history.push(redirect);
      }
    
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


  


    return (
      <>
        



        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
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
            </Dialog>


      </>
    );
};

export default UserSettingsFormModal;
