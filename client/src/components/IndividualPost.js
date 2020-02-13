import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Image,roundedCircle} from 'react-bootstrap';
import  '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';
import ProfileImageShow from './ProfileImageShow';
import Comment from './Comment';
import { makeStyles } from '@material-ui/core/styles';
import { Route, withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Add';
import PostAddModal from './PostAddModal';
import { browserHistory } from 'react-router';
import { Form } from 'react-bootstrap';

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
     
  }));

const IndividualPost = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      isCirclePic : true,
      isPost:true  
    });

//     function handleDelete() {
//       axiosWithAuth()
//           .delete(`${process.env.REACT_APP_API_URL}/cars/${props.post.id}`)
//           .then(res => {
//               props.fetchCarsFunction();
//           })
//           .catch(error => {
//               console.error(error);
//           });
//   }
     
  
    return (
      <>
        <div className ="singlePost" style={{ width:"98%",marginBottom:"5px"}}>
        <div style={{display:"flex", flexDirection:"row"}}>
        <section style={{display:"flex", flexDirection:"row"}}>
      {props.post.file_name ?
        <ProfileImageShow style={{width:"40px",height:"40px",paddingRight:"2px"}} isPost={state.isPost} userId={props.post.userId} isCirclePic={state.isCirclePic} image={props.post.file_name} post={props.post} />
          :
          <p>{props.post.user_name}</p>
        }

        </section>

          
            <p>{props.post.post_date}</p>
            </div>
            <p>{props.post.post_text}</p>
            <a href="https://www.w3schools.com/html/" target="_blank">links</a>
            <p>images</p>
            {/* <img style={{width:"50%",height:"50%"}} src="https://source.unsplash.com/random"/> */}

         
            <div style={{width:"100%"}}>
            <Form.Control size="md" type="text" placeholder="Comment" />
            <Comment/>
              </div>
             


          
            
        </div> 
            
      </>
    );
  };
  
  
 
  
  export default IndividualPost;