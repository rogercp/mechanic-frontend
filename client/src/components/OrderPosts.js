
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
    

 <Dropdown as={ButtonGroup} style={{marginBottom:"5px"}}>
 <Dropdown.Toggle variant="dark" id="dropdown-basic">
    order by {props.orderPosts === null ? "date" :props.orderPosts}
  </Dropdown.Toggle>

   <Dropdown.Menu>

     {
       props.currentTermForFilter === null
       ?
       <>
       <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts('AllPosts','date',1) }>date</Dropdown.Item>
       <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts('AllPosts','likes',1) }>likes</Dropdown.Item>
       </>
       :
       <>
       <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts(`${props.currentTermForFilter}`,'date',1) }>date</Dropdown.Item>
       <Dropdown.Item onClick={(e)=> props.fetchFilteredPosts(`${props.currentTermForFilter}`,'likes',1) }>likes</Dropdown.Item>
       </>
     }
    
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
  currentPage :state.post.currentpage,
  currentTermForFilter : state.post.currentTermForFilter
});
export default connect(
  mapStateToProps,
  { toggleSearchToTrue, fetchFilteredPosts }
)(OrderPosts);

