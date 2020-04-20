

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
// import { fetchPosts } from "../store/actions/postActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Search from "./Search";
import { Dropdown } from 'react-bootstrap';



function Posts(props) {

  const [searchPosts, setsearchPosts] = useState([])

  // const [filteredPosts,setFilteredposts] = useState({
  // })

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
  props.fetchFilteredPosts("AllPosts","date")

}


  console.log(props.filteredPosts,"filtered posts from reduz in posts")

  if (props.searchToggle === true) {

    return (

      <>

        <Search searchPostsHandler={searchPostsHandler} />

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Order By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          {

            searchPosts.map(p => {
              return (
                <>
                  <IndividualPost post={p} key={caches.uid} fetchPosts={props.fetchFilteredPosts} />
                </>
              );
            })


          }


          {/* <ExpandMoreIcon style={{ fontSize: "100px" }} /> */}

        </div>
      </>

    )
  }
  else if(props.filteredPosts.length>0) {
    return (
      <>

        <Search searchPostsHandler={searchPostsHandler} />


            <Dropdown>
          <Dropdown.Toggle variant="seconday" id="dropdown-basic">
          Order By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Likes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

       
              {props.filteredPosts.map(p => {
                return (
                  <>
                    <IndividualPost post={p} key={caches.uid} fetchPosts={props.fetchFilteredPosts} />
                  </>
                );
              })}
          
    

          {/* <ExpandMoreIcon style={{ fontSize: "100px" }} /> */}

        </div>
      </>
    );
  }else{

    return (


      <>
      <h1>ayyyyy</h1>
      </>
    )
  }


};


const mapStateToProps = state => ({
  searchToggle: state.post.searchToggle,
  myposts: state.post.posts,
  filteredPosts: state.post.filteredPosts
});
export default connect(
  mapStateToProps,
  { toggleSearchToTrue, fetchFilteredPosts }
)(Posts);
