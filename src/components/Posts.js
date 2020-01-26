

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/postActions";





function Posts(props) {
  

    useEffect(() => {
      props.fetchPosts()
    }, []);
    
    // async function fetchPostsCall() {
    //   props.fetchPosts()
    // }

  
    
    return (
      <>
 
      <div style={{display:"flex", flexDirection:"column"}}>

        {props.myposts.map(p => {
            return (
                <>
                <IndividualPost   post={p}  key={caches.uid} fetchPosts={p.fetchPosts} />
                </>
            );
        })}
        

        </div> 
      </>
    );
};


const mapStateToProps = state => ({
  myposts: state.post.posts,
});
export default connect(
  mapStateToProps,
  {fetchPosts}
)(Posts);
