
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
// import { changeOrderPosts } from "../store/actions/postActions";
import Select from '@material-ui/core/Select';
import { Dropdown,Button,ButtonGroup } from 'react-bootstrap';


function OrderPosts(props) {

  


  return (

    <>
    

 <Dropdown as={ButtonGroup}>
 <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Order By 
  </Dropdown.Toggle>


   <Dropdown.Menu>
     <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts("AllPosts",'date',1) }>date</Dropdown.Item>
    <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts("AllPosts",'likes',1) }>likes</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
    </>

  );



};



const mapStateToProps = state => ({
  searchToggle: state.post.searchToggle,
  myposts: state.post.posts,
  filteredPosts: state.post.filteredPosts,
  orderPosts: state.post.order,
  currentpageForOrderedPosts : state.post.currentpageForOrderedPosts
});
export default connect(
  mapStateToProps,
  { toggleSearchToTrue, fetchFilteredPosts }
)(OrderPosts);

