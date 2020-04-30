
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from "../store/actions/postActions";
import { fetchFilteredPosts } from "../store/actions/postActions";
import { fetchProfileImage } from "../store/actions/settingsActions";
import moment from 'moment'
import PostImageUpload from './PostImageUpload'
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import '../styles/navbar.scss';



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
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

function PostForm(props) {

  const time = moment().format("MMMM Do YYYY, h:mma")
  const userId = localStorage.getItem('id');
  const username = localStorage.getItem('username');
  const classes = useStyles();
  const [currentForPost,setCurrentPostForPost] = useState()
  const [state, setState] = React.useState({
    displayName: username,
    user_id: userId,
    category: '',
    post_text: '',
    post_date: time,
  });
  const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
  const [fullopen, setFullOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();



  function getSteps() {
    return ['Create Post', 'Add Images'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Create Post';
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



    function handleClose() {

        props.onClose();
        handleReset()

    }




  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const onSubmitHandler = e => {
    e.preventDefault();
    props.addPost(state);
    props.fetchFilteredPosts();
    setCurrentPostForPost(props.currentPost)
    handleNext()

    // props.onClose();
  };



  useEffect(() => {

    // setCurrentPost(props.currentPost)
  }, []);

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
      <FormControl className={classes.formControl} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          native
          name="category"
          className={classes.textField}
          value={state.category}
          onChange={handleChange('category')}
          inputProps={{
            name: 'type',
            id: 'outlined-type-native-simple',
          }}
        >
          <option value="" />
          <option value={"Maintence"}>Maintence</option>
          <option value={"Mods"}>Mods</option>
          <option value={"Repairs"}>Repairs</option>
          <option value={"Tips"}>Tips</option>
          <option value={"Exotics"}>Exotics</option>
          <option value={"German"}>German</option>

        </Select>

        <TextField
          id="outlined-multiline-static"
          multiline
          name="post_text"
          value={state.post_text}
          onChange={handleChange('post_text')}
          //   rows="4"
          placeholder="Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
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
    
    <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>


    <PostImageUpload post={currentForPost}isCarousel={true}   />
    
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClose}>

      Skip
  </Button>







  </FormControl>
    }
      </div>
      </Dialog>




    
    </>
  );
};


const mapStateToProps = (state) => ({
  userImage: state.setting.userImage,
  currentPost: state.post.currentPost
});

export default connect(
  mapStateToProps,
  { addPost, fetchFilteredPosts, fetchProfileImage }
)(withRouter(PostForm));

