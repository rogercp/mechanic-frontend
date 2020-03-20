import ProfileImageUpload from './ProfileImageUpload';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { axiosWithAuth } from '../helpers/index';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import CarFixImgUpload from './CarFixImgUpload';



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 270,
        height:600
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
}))


function CarCardEditModal(props) {


    const classes = useStyles();
    const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
    const [state, setState] = React.useState({
        user_name: localStorage.getItem("username"),

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

console.log(props.carFix,"carfix")

    return (
        <>


            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                
                 <FormControl className={classes.formControl} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
                 <div >
                 {/* <CarFixImgUpload carFix={props.carFix} /> */}
                 </div>
                
                    <div> 
{/* 
                        <p>{props.car}:description</p>
                        <p>{props.car}:price</p> */}
                      
                    <TextField
                            id="standard-basic"
                            name="user_name"
                            defaultValue = {state.user_name}
                            className={classes.textField}
                            label="username"
                            margin="normal"
                            value={state.user_name}
                            onChange={handleChange('user_name')}
                        />
                    <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={onSubmitHandler}
                            >
                            submit
                        </Button>


                    </div>
                                    
                       

                </FormControl>
            </Dialog>


        </>
    );
};

export default CarCardEditModal;
