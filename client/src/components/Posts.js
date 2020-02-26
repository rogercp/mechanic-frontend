

import React, { useState, useEffect} from "react";
import DashSideNav from './DashSideNav';
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/postActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import search from './Search';
import Search from "./Search";




function Posts(props) {
  
const [searchPosts,setsearchPosts] = useState([])


  async function searchPostsHandler (term) {
    
  
    axiosWithAuth()
        .post('/post/search', {searchTerm:term})
        .then(res => {  
          console.log(searchPosts)
          setsearchPosts(res.data)
        })
        .catch(err => {      
        });
  };
  

    useEffect(() => {
      props.fetchPosts()
      
    }, []);

if(props.filteredPosts.length >0){

  return (

    <>

    <Search  searchPostsHandler={searchPostsHandler} />

  <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
    
    
      {searchPosts.length>0 ?

        searchPosts.map(p => {
        return (
            <>
            <IndividualPost   post={p}  key={caches.uid} fetchPosts={props.fetchPosts} />
            </>
        );
    })
      
      :
      
    
    props.filteredPosts.map(p => {
        return (
            <>
            <IndividualPost   post={p}  key={caches.uid} fetchPosts={props.fetchPosts} />
            </>
        );
    })
  

    }
    
    
     <ExpandMoreIcon style={{fontSize:"100px"}} />

    </div> 
  </>

  )
}else{

  return (
    <>

      <Search  searchPostsHandler={searchPostsHandler} />

    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      
      {searchPosts.length>0 ?

        searchPosts.map(p => {
        return (
            <>
            <IndividualPost   post={p}  key={caches.uid} fetchPosts={props.fetchPosts} />
            </>
        );
    })
      
      :
      
      props.myposts.map(p => {
          return (
              <>
              <IndividualPost   post={p}  key={caches.uid} fetchPosts={props.fetchPosts} />
              </>
          );
      })

      }
      
      
       <ExpandMoreIcon style={{fontSize:"100px"}} />

      </div> 
    </>
  );
}

  
};


const mapStateToProps = state => ({
  myposts: state.post.posts,
  filteredPosts:state.post.filteredPosts
});
export default connect(
  mapStateToProps,
  {fetchPosts}
)(Posts);
