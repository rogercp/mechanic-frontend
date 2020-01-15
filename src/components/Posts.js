/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
/**
 *  Import styles
 */



/**
 * Define component
 */


function Posts(props) {
  

    const [posts,setPosts] = useState([])


    useEffect(() => {
   
        fetchPosts()
        
    }, []);
    
    async function fetchPosts() {
      const res = await axiosWithAuth().get(`/post/all`); 
      setPosts(res.data);
      console.log(res.data , "data")
    }

    return (
      <>

      <div style={{display:"flex", flexDirection:"column"}}>


        
        {posts.map(p => {
            return (
                <>
                <IndividualPost  fetchPosts={fetchPosts} post={p}  key={caches.uid} fetchPosts={p.fetchPosts} />
                </>
            );
        })}
        

        </div>


 
      </>
    );
};

/**
 * Export component
 */

export default Posts;
