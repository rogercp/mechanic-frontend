/**
 * Dependencies
 */

import React from 'react';
import Switch from '@material-ui/core/Switch';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { axiosWithAuth } from '../helpers/index';
import { withStyles } from '@material-ui/core/styles';


const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
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


// fix_date: (new Date())

function CarMaintenenceForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fix_not_maintenence: false,
    fix:'',
    fix_price: '',
    fix_description: '',
    fix_date: new Date().toLocaleString()
  });

  const handleChange2 = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  
  const handleDateChange = date => {
    setValues({fix_date : date})
  };


  const onSubmitHandler = e => {
    e.preventDefault();
    
    axiosWithAuth()
        .post(`/car_fix/${props.car.id}`, values)
        .then(res => {
          
        })
        .catch(err => {
        });
};

    return (
      <>
     
       <div className={classes.root}> 
       
      <form className={classes.container} noValidate autoComplete="off" > 
    
      <FormControl fullWidth className={classes.margin} onSubmit={onSubmitHandler}>
      <p>{values.fix_not_maintenence === false ? "Maintence" : "Repair" }</p>
        <AntSwitch
        onChange={handleChange2('fix_not_maintenence')}
        value="fix_not_maintenence"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      <TextField
          id="outlined-textarea"
          onChange={handleChange('fix')}
          name="fix"
          value={values.fix}
          placeholder={values.fix_not_maintenence === false ? "Maintence" : "Repair"}
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          name="fix_description"
          value={values.fix_description}
          onChange={handleChange('fix_description')}
          rows="4"
          placeholder="Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        

      <TextField
          label="Total Cost"
          value={values.fix_price}
          name="fix_price"
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
          onChange={handleDateChange}
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
        onClick={onSubmitHandler}
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
