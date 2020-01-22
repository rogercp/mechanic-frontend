import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';


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
      
       
        <div style={{backgroundColor:"red", height:"400px",width:"20rem" }}>
            <h3>{props.post.category}</h3>
            <p>{props.post.post_text}</p>

        </div>      
  
      </>
    );
  };
  
  
 
  
  export default IndividualPost;