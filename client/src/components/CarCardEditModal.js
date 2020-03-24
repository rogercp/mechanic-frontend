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
    // const [state, setState] = React.useState({
    //     user_name: localStorage.getItem("username"),

    // });


    const [state, setState] = React.useState({
        car_make: props.car.car_make,
        car_model: props.car.car_model,
        car_nickname: props.car.car_nickname,
        car_year: props.car.car_year,
      });
     

console.log(props.car,"carcarscarscars")

// send edit






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
        <h3>Edit</h3>
                    
        <TextField
       
          id="standard-basic"
          name="car_year"
          defaultValue = {state.car_year}
          className={classes.textField}
          label="Year"
          margin="normal"
          value={state.car_year}
          name="car_make"
          onChange={handleChange('car_year')}
        />


        <TextField
        
          id="standard-basic"
          name="car_make"
          defaultValue = {state.car_make}
          className={classes.textField}
          label="Make"
          margin="normal"
          value={state.car_make}
          onChange={handleChange('car_make')}
        />


        <TextField
        
          id="standard-basic"
          name="car_model"
          defaultValue = {state.car_model}
          className={classes.textField}
          label="Model"
          margin="normal"
          value={state.car_model}
          onChange={handleChange('car_model')}
        />


        <TextField
        
          id="standard-basic"
          name="car_nickname"
          defaultValue = {state.car_nickname}
          className={classes.textField}
          label="Nickname"
          margin="normal"
          value={state.car_nickname}
          onChange={handleChange('car_nickname')}
        />



        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={onSubmitHandler}
        >
          Enter
        </Button>


                    </div>
                                    
                       

                </FormControl>
            </Dialog>


        </>
    );
};

export default CarCardEditModal;
