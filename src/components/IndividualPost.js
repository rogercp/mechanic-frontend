import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Image,roundedCircle} from 'react-bootstrap';


import  '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';


const IndividualPost = (props) => {
    // const classes = useStyles();
    
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
        <Image style={{width:"40px",height:"40px",paddingRight:"2px"}} src="https://source.unsplash.com/random" roundedCircle />
           <p>username</p>
        </section>
        
            <p>{props.post.post_date}</p>
            <p>datetime</p>
            </div>
            <h4>{props.post.post_text}</h4>
            <a href="https://www.w3schools.com/html/" target="_blank">links</a>
            <p>images</p>
            <img style={{width:"50%",height:"50%",}} src="https://source.unsplash.com/random"/>
            
        </div> 
            
      </>
    );
  };
  
  
 
  
  export default IndividualPost;