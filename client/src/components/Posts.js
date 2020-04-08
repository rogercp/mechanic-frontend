

import React, { useState, useEffect } from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import {  fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
import {fetchPosts} from "../store/actions/postActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import search from './Search';
import Search from "./Search";



function Posts(props) {

  const [searchPosts, setsearchPosts] = useState([])
 

  async function searchPostsHandler(term) {

    axiosWithAuth()
      .post('/post/search', { searchTerm: term })
      .then(res => {
        setsearchPosts(res.data)
       props.toggleSearchToTrue()
      })
      .catch(err => {
      });
  };


  useEffect(() => {
    onFirstLoad()
  }, []);


  function onFirstLoad(){

    props.fetchFilteredPosts("AllPosts")

  }

  console.log(props.filteredPosts, "this is all the posts")

  if (props.searchToggle === true) {

    return (

      <>

        <Search searchPostsHandler={searchPostsHandler} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>


          {

            searchPosts.map(p => {
              return (
                <>
                  <IndividualPost   post={p} key={caches.uid} fetchPosts={props.fetchPosts} />
                </>
              );
            })


          }


          <ExpandMoreIcon style={{ fontSize: "100px" }} />

        </div>
      </>

    )
  } 
  else {
    return (
      <>

        <Search searchPostsHandler={searchPostsHandler} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      
            {props.filteredPosts.map(p => {
              return (
                <>
                  <IndividualPost   post={p} key={caches.uid} fetchPosts={props.fetchPosts} />
                </>
              );
            })}

          

          <ExpandMoreIcon style={{ fontSize: "100px" }} />

        </div>
      </>
    );
  }


};


const mapStateToProps = state => ({
  searchToggle: state.post.searchToggle,
  myposts: state.post.posts,
  filteredPosts: state.post.filteredPosts
});
export default connect(
  mapStateToProps,
  {toggleSearchToTrue,fetchFilteredPosts,fetchPosts }
)(Posts);
