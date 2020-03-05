

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../helpers/index';
import ImageUploadModal from './ImageUploadModal';


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
}));

function CarForm(props) {


  const classes = useStyles();
  const [fullopen, setFullOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [currentCar,setCurrentCar] = useState({})
  const [state, setState] = React.useState({
    car_type: '',
    car_make: '',
    car_model: '',
    car_nickname: '',
    car_year: ''
  });



  const handlefullOpen = () => {
    setFullOpen(true);
  };
  const handlefullClose = () => {
    setFullOpen(false);
  };

  function handleErrorClose() {
    setErrorOpen(false);
  }

  function handleErrorOpen() {
    setErrorOpen(true);
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
        setCurrentCar(res.data)
        props.fetchCars();
        // props.onClose();
        handlefullOpen()
      })
      .catch(err => {
      });
  };
 

  return (
    <>

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


      <ImageUploadModal
        isCar={true}
        onclose={props.onClose}
        car={currentCar}
        open={fullopen}
        handleClose={handlefullClose}
        onClose={handlefullClose}
      />

    </>
  );
};



export default CarForm;
