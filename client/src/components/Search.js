

import React, { useState, useEffect} from "react";
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
import { Form } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
      },
      fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      }, 
      margin: {
        margin: theme.spacing(1),
        boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
        '&:hover':{
            boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
          },
      },
      button: {
        margin: theme.spacing(1),
      },
  
    }));


function Search(props) {
  
    const classes = useStyles();
    const [state, setState] = React.useState({
      searchTerm:'',
      
    });
  


    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  


    return (
      <>
        
      <div style={{width:"100%",display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:"15.65px"}}>
   

<Form.Control 
      size="md" 
      type="text" 
      placeholder="Search" 
      className={classes.margin} 
      
      name="searchTerm"
      label="searchTerm"
      margin="normal"
      value={state.searchTerm}
      onChange={handleChange('searchTerm')}
      />
     
    
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(e)=>{props.searchPostsHandler(state.searchTerm)}}
      >
        search
      </Button>

     
          </div>
      </>
    );
};



export default Search;
