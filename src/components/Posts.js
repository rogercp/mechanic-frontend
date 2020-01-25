

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/postActions";





function Posts(props) {
  

    useEffect(() => {
      fetchPostsCall()
    }, []);
    
    async function fetchPostsCall() {
      await props.fetchPosts()
    }


    
    return (
      <>

      <div style={{display:"flex", flexDirection:"column"}}>

        {props.posts.map(p => {
            return (
                <>
                <IndividualPost  fetchPosts={fetchPostsCall} post={p}  key={caches.uid} fetchPosts={p.fetchPosts} />
                </>
            );
        })}
        

        </div>
      </>
    );
};


const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(
  mapStateToProps,
  {fetchPosts}
)(Posts);
