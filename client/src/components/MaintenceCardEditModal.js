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
import Switch from '@material-ui/core/Switch';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';



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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 270,

    
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


function MaintenceCardEditModal(props) {


  const classes = useStyles();
  const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
  const [state, setState] = React.useState({

    // fix_not_maintenence: props.carFix.fix_not_maintenence,
    fix: props.carFix.fix,
    fix_price: props.carFix.fix_price,
    fix_description: props.carFix.fix_description,
    fix_date: props.carFix.fix_date

  });
  
  const [toggleView,setToggleView] = React.useState(false)

  function toggleViewHandler(){

    if(toggleView){
      setToggleView(false)
    }
   else{
    setToggleView(true)
   }
  
    
  }
  

  function handleClose() {
    onClose();
  }

  function handleClick() {
    props.history.push(redirect);
  }

  const handleChange2 = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };


  const handleDateChange = date => {
    setState({ fix_date: date })
  };

const closeForm = () =>{

}
  console.log(state, "carfixedits")
  const onSubmitHandler = e => {

    e.preventDefault();
    axiosWithAuth()
      .put(`car_fix/update/${props.carFix.id}`, state)
      .then(res => {
        handleClose()
        props.fetchFixes(props.car.id)
      })
      .catch(err => {
      });
  };


  if(toggleView){
  return(
    <Dialog open={open} onClose={handleClose} className={classes.dialog}>
  <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={toggleViewHandler}
            >
              Go To Edit Form
        </Button>
    <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  
        <CarFixImgUpload car={props.car} fetchFixes={props.fetchFixes} carFix={props.carFix} />
        </FormControl>
        <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={handleClose}
            >
             Close Form
        </Button>
      </Dialog>

  )
}else{


  return (
    <>


      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
      <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={toggleViewHandler}
            >
              Go To Image Edit
        </Button>
      <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
         

          {/* <p>{state.fix_not_maintenence === false ? "Maintence" : "Repair"}</p>
            <AntSwitch
              onChange={handleChange2('fix_not_maintenence')}
              value="fix_not_maintenence"
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            /> */}
            <div>
            
          <h3>Edit Maintenence</h3>
          <TextField
            id="outlined-textarea"
            onChange={handleChange('fix')}
            name="fix"
            defaultValue={state.fix}

            value={state.fix}
            placeholder={state.fix_not_maintenence === false ? "Maintence" : "Repair"}
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            name="fix_description"
            defaultValue={state.fix_description}

            value={state.fix_description}
            onChange={handleChange('fix_description')}
            rows="4"
            placeholder="Description"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />


          <TextField
            label="Total Cost"
            defaultValue={state.fix_price}

            value={state.fix_price}
            name="fix_price"
            id="standard-start-adornment"
            onChange={handleChange('fix_price')}
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />

          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Task Completed"
                format="MM/dd/yyyy"
                defaultValue = {state.fix_date}

                value={state.fix_date}
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
        </Button> */}


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
        <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={handleClose}
            >
             Close Form
        </Button>
      </Dialog>


    </>
  );
  }
};

const mapStateToProps = state => ({
  
});
export default connect(
  mapStateToProps,
  { fetchFixes }
)(MaintenceCardEditModal);