

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/postActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





function Posts(props) {
  

    useEffect(() => {
      props.fetchPosts()
      console.log(props.myposts,"usersposts")
    }, []);



    return (
      <>
 
      <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
        
        {props.myposts.map(p => {
            return (
                <>
                <IndividualPost   post={p}  key={caches.uid} fetchPosts={props.fetchPosts} />
                </>
            );
        })}
        
        
         <ExpandMoreIcon style={{fontSize:"100px"}} />

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
