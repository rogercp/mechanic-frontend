
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
// import { changeOrderPosts } from "../store/actions/postActions";
import Select from '@material-ui/core/Select';
import { Dropdown,Button,ButtonGroup } from 'react-bootstrap';


function OrderPosts(props) {

  

  console.log(props.orderPosts,'coming corm redux orderf')

  return (

    <>
    

 <Dropdown as={ButtonGroup}>
   <Button variant="Dark">Order By</Button>

   <Dropdown.Toggle split variant="Dark" id="dropdown-split-basic" />

   <Dropdown.Menu>
     <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts("AllPosts",'date') }>date</Dropdown.Item>
    <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts("AllPosts",'likes') }>likes</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
    </>

  );



};



const mapStateToProps = state => ({
  searchToggle: state.post.searchToggle,
  myposts: state.post.posts,
  filteredPosts: state.post.filteredPosts,
  orderPosts: state.post.order
});
export default connect(
  mapStateToProps,
  { toggleSearchToTrue, fetchFilteredPosts }
)(OrderPosts);

