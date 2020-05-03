import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { axiosWithAuth } from '../helpers/index';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import CarImgUpload from './CarImgUpload';



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


function CarCardEditModal(props) {


  const classes = useStyles();
  // modal methods
  const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
  const [state, setState] = React.useState({
    car_make: props.car.car_make,
    car_model: props.car.car_model,
    car_nickname: props.car.car_nickname,
    car_year: props.car.car_year,
  });
  // changes view from form to image edit
  const [toggleView,setToggleView] = React.useState(false)

  // view changer for buttons
  function toggleViewHandler(){

    if(toggleView){
      setToggleView(false)
    }
   else{
    setToggleView(true)
   }
  
    
  }
  
  // modal methods being used 
  function handleClose() {
    onClose();
  }
  const closeForm = () =>{
    props.fetchCars()
    props.onClose()
  }

  // function handleClick() {
  //   props.history.push(redirect);
  // }

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };




  const onSubmitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`cars/update/${props.car.id}`, state)
      .then(res => {
        props.onClose()
        props.fetchCars()

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
    
    <CarImgUpload onClose={props.onClose} fetchCars={props.fetchCars} car={props.car} isForm={true} />
    
        </FormControl>
        <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={closeForm}
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
         
          <div>
        
            <h3>Edit Car</h3>

            <TextField

              id="standard-basic"
              name="car_year"
              defaultValue={state.car_year}
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
              defaultValue={state.car_make}
              className={classes.textField}
              label="Make"
              margin="normal"
              value={state.car_make}
              onChange={handleChange('car_make')}
            />


            <TextField

              id="standard-basic"
              name="car_model"
              defaultValue={state.car_model}
              className={classes.textField}
              label="Model"
              margin="normal"
              value={state.car_model}
              onChange={handleChange('car_model')}
            />


            <TextField

              id="standard-basic"
              name="car_nickname"
              defaultValue={state.car_nickname}
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
        <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={closeForm}
            >
             Close Form
        </Button>
      </Dialog>
      </>
  )
}
  
};

export default CarCardEditModal;
