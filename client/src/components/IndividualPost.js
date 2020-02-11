import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Image,roundedCircle} from 'react-bootstrap';
import  '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';
import ProfileImageShow from './ProfileImageShow';


const IndividualPost = (props) => {
    // const classes = useStyles();
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
            <img style={{width:"50%",height:"50%"}} src="https://source.unsplash.com/random"/>
            
        </div> 
            
      </>
    );
  };
  
  
 
  
  export default IndividualPost;