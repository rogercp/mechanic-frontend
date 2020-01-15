/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';

/**
 *  Import styles
 */



/**
 * Define component
 */


function Posts(props) {
  

    const [posts,setPosts] = useState([])


    // useEffect(() => {
   
    //     fetchPosts()
        
    // }, []);
    
    // async function fetchPosts() {
    //   const res = await axiosWithAuth().get(`/posts`); 
    //   setPosts(res.data);
    // }

    return (
      <>

      <div style={{display:"flex", flexDirection:"column"}}>

        <div style={{backgroundColor:"red", height:"400px",width:"20rem" }}>

            this is a mock post 

        </div>


        </div>


 
      </>
    );
};

/**
 * Export component
 */

export default Posts;
