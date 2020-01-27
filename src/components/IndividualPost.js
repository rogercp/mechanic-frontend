import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Image,roundedCircle} from 'react-bootstrap';


import  '../styles/postsIndividual.scss'


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
        
            <p>Dec 14 2009</p>
            </div>
            <h3>{props.post.category}</h3>
            <p>{props.post.post_text}</p>


        </div> 
            
      </>
    );
  };
  
  
 
  
  export default IndividualPost;