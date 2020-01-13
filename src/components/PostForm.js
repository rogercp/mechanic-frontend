/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../helpers/index';


/**
 *  Import styles
 */

import  '../styles/navbar.scss'

/**
 * Define component
 */


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

function CarForm(props) {

  
  const classes = useStyles();
  const [state, setState] = React.useState({
    car_type: '',
    car_make: '',
    car_model:'',
    car_nickname:'',
    car_year:''
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
        .post(`/cars`, state)
        .then(res => {  
            window.location.reload();
        })
        .catch(err => {      
        });
};



    return (
      <>

      <FormControl className={classes.formControl} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          native
          name="car_type"
          className={classes.textField}
          value={state.car_type}
          onChange={handleChange('car_type')}
          inputProps={{
            name: 'type',
            id: 'outlined-type-native-simple',
          }}
        >
          <option value="" />
          <option value={"Sedan"}>blank</option>
          <option value={"Coupe"}>blank</option>
          <option value={"Van"}>blank</option>
          <option value={"SUV"}>blank</option>
          <option value={"Truck"}>blank</option>
          <option value={"Wagon"}>blank</option>
          <option value={"Convertible"}>blank</option>
        </Select>
     
      
        <TextField
          id="standard-basic"
          name="car_year"
          className={classes.textField}
          label="Year"
          margin="normal"
          value={state.car_year}
          name="car_make"
          onChange={handleChange('car_year')}
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

 </FormControl>

      </>
    );
};

/**
 * Export component
 */

export default CarForm;
