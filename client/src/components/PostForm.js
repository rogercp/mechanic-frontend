
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
import PostImageFormModal from './PostImageFormModal'

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
}));

function PostForm(props) {

  const time = moment().format("MMMM Do YYYY, h:mma")

  const userId = localStorage.getItem('id');
  const username = localStorage.getItem('username');


  const classes = useStyles();
  // const [currentPost,setCurrentPost] = useState()
  const [state, setState] = React.useState({
    displayName: username,
    user_id: userId,
    category: '',
    post_text: '',
    post_date: time,
  });

  const [fullopen, setFullOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);


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
    props.addPost(state);
    props.fetchFilteredPosts();
    handlefullOpen()

    // props.onClose();
  };

  console.log(props.currentPost, "currentPosty")

  useEffect(() => {

    // setCurrentPost(props.currentPost)
  }, []);

  return (
    <>
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

      <PostImageFormModal
        post={props.currentPost}
        onclose={props.onClose}
        open={fullopen}
        handleClose={handlefullClose}
        onClose={handlefullClose}
        onOpen = {handlefullOpen}
      />
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
)(PostForm);

