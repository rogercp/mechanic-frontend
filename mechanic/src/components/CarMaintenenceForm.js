/**
 * Dependencies
 */

import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

/**
 *  Import styles
 */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),

  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
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

/**
 * Define component
 */

function CarMaintenenceForm(props) {
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    fix_not_maintenence: false,
    fix:'',
    fix_price: '',
    fix_description: '',
    fix_date: (new Date())
  });

  const handleChange2 = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setValues.selectedDate = date;
  };

    return (
      <>
      <h1> CarMaintenence </h1>
       <div className={classes.root}> 
       
      <form className={classes.container} noValidate autoComplete="off"> 
    
      <FormControl fullWidth className={classes.margin}>
      <p>{values.fix_not_maintenence === false ? "maintence" : "repair" }</p>
        <Switch
        onChange={handleChange2('fix_not_maintenence')}
        value="fix_not_maintenence"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      <TextField
          id="outlined-textarea"
          placeholder={values.fix_not_maintenence === false ? "maintence" : "repair"}
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          onChange={handleChange('fix_description')}
          rows="4"
          placeholder="Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        

      <TextField
          label="Total Cost"
          id="standard-start-adornment"
          onChange={handleChange('fix_price')}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Task Completed"
          format="MM/dd/yyyy"
          value={values.fix_date}
          onChange={handleChange('fix_date')}
          KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            />
          </MuiPickersUtilsProvider>

        <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        >
        documents
        </Button>

          
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        >
        Enter
        </Button>
         </FormControl>
         
     </form> 
     </div> 
        </>
    );
};

/**
 * Export component
 */

export default CarMaintenenceForm;
