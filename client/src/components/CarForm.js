

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { axiosWithAuth } from '../helpers/index';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CarImgUpload from './CarImgUpload'

import '../styles/navbar.scss'



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
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dialog: {

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
}));

function CarForm(props) {


  const classes = useStyles();
  // modal methods from props
  const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
  const [fullopen, setFullOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState({})
  const [state, setState] = React.useState({
    car_type: '',
    car_make: '',
    car_model: '',
    car_nickname: '',
    car_year: ''
  });
  // handle the stepper at top of modal
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // 

// stepper methods 
  function getSteps() {
    return ['Create Car', 'Add Images'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Create Car';
      case 1:
        return 'Add Images';
      default:
        return 'Unknown stepIndex';
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // 
  
 



// modal methods coming into use
    function handleClose() {

        props.onClose();
        handleReset()

        props.fetchCars()
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
      .post(`/cars`, state)
      .then(res => {
        handleNext()
        setCurrentCar(res.data)
        props.fetchCars();
      })
      .catch(err => {
      });
  };


  return (
    <>
    
    <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <div className={classes.paper}>
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>

      {activeStep === 0?
      <FormControl className={classes.formControl} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
      
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
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
        <option value={"Sedan"}>Sedan</option>
        <option value={"Coupe"}>Coupe</option>
        <option value={"Van"}>Van</option>
        <option value={"SUV"}>SUV</option>
        <option value={"Truck"}>Truck</option>
        <option value={"Wagon"}>Wagon</option>
        <option value={"Convertible"}>Convertible</option>
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


      <TextField
        id="standard-basic"
        name="car_make"
        className={classes.textField}
        label="Make"
        margin="normal"
        value={state.car_make}
        onChange={handleChange('car_make')}
      />


      <TextField
        id="standard-basic"
        name="car_model"
        className={classes.textField}
        label="Model"
        margin="normal"
        value={state.car_model}
        onChange={handleChange('car_model')}
      />


      <TextField
        id="standard-basic"
        name="car_nickname"
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

     

    </FormControl>
    :
    
    <>
    <CarImgUpload car={currentCar} isForm={true} />
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClose}>

      Done
</Button>
  </>
    }
      
      </div>
   </Dialog>

      

    </>
  );
};



export default CarForm;
