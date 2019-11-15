/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    Width: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 120,
  },
}));

function CarForm(props) {

  
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: '',
    year: '',

  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    // setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


    return (
      <>
        
        <h1>Car Form</h1>

       



      <form className={classes.container} noValidate autoComplete="off">
      

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="outlined-type-native-simple">Type</InputLabel>
        <Select
          native
          value={state.type}
          onChange={handleChange('type')}
          labelWidth={labelWidth}
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
      </FormControl>
      <TextField
          id="standard-number"
          label="Year"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

       
      

      
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Make"
          margin="normal"
        />
 
 
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Model"
          margin="normal"
        />


        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Nickname"
          margin="normal"
        />


</form>
      </>
    );
};

/**
 * Export component
 */

export default CarForm;
