import ProfileImageUpload from './ProfileImageUpload';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { axiosWithAuth } from '../helpers/index';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    dialog: {
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
        justifyContent: 'center',
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
        user_name: '',

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



    const userId = localStorage.getItem('id');
    const username = localStorage.getItem("username");

    const onSubmitHandler = e => {
        console.log(state,"usernamesatte")
        e.preventDefault();
        axiosWithAuth()
            .put(`users/update/${userId}`, state)
            .then(res => {
                localStorage.setItem("username",`${state.user_name}`);
                window.location.reload();
            })
            .catch(err => {
            });
    };




    return (
        <>


            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                <div >

                    <ProfileImageUpload onClose={props.onClose} />

                    <div style={{ maxWidth: "100px" }}>
                        <TextField
                            id="standard-basic"
                            name="user_name"
                            defaultValue = {username}
                            className={classes.textField}
                            label="username"
                            margin="normal"
                            value={state.user_name}
                            onChange={handleChange('user_name')}
                        /></div>
  <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmitHandler}
        >
          submit
      </Button>


                </div>
            </Dialog>


        </>
    );
};

export default UserSettingsFormModal;
