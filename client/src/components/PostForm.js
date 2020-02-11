
import React,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from "../store/actions/postActions";
import { fetchPosts } from "../store/actions/postActions";
import { fetchProfileImage } from "../store/actions/settingsActions";
import moment from 'moment'

import  '../styles/navbar.scss';



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
}));

function PostForm(props) {

  const time = moment().format("MMMM Do YYYY, h:mma")

  const userId = localStorage.getItem('id');
  const username = localStorage.getItem('username');  
  
  console.log(userId,"id")
  console.log(username,"name")

  const classes = useStyles();
  const [state, setState] = React.useState({
    displayName:username,
    user_id: userId,
    category : '',
    post_text:'',
    post_date: time,
  });



  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const onSubmitHandler = e => {
    e.preventDefault();
    props.addPost(state);
    props.fetchPosts();
    props.onClose();

};
     
useEffect(() => {

  props.fetchProfileImage(userId)

}, []);


    return (
      <>
      <FormControl className={classes.formControl} style={{display:'flex',alignItems:'center',justifyContent:'center'}} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

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
          <option value={"Sedan"}>category</option>
          <option value={"Coupe"}>category</option>
          <option value={"Van"}>category</option>
          <option value={"SUV"}>category</option>
          <option value={"Truck"}>category</option>
          <option value={"Wagon"}>category</option>
          <option value={"Convertible"}>category</option>
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
      </>
    );
};


const mapStateToProps = ( state ) => ({
  userImage : state.setting.userImage

});

export default connect(
  mapStateToProps,
  { addPost,fetchPosts,fetchProfileImage }
)(PostForm);

