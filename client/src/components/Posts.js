

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
  
const [filteredRecipes,setFilteredRecipes] = useState([])


  async function searchPostsHandler (term) {
    console.log(term,"term")
  

    axiosWithAuth()
        .post('/post/search', {searchTerm:term})
        .then(res => {  
          setFilteredRecipes(res.data)
        })
        .catch(err => {      
        });
  };
  

    useEffect(() => {
      props.fetchPosts()
      console.log(props.myposts,"usersposts")
    }, []);



    return (
      <>

        <Search  searchPostsHandler={searchPostsHandler} />
 
      <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
        
        {filteredRecipes.length>0 ?

          filteredRecipes.map(p => {
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
};


const mapStateToProps = state => ({
  myposts: state.post.posts,
});
export default connect(
  mapStateToProps,
  {fetchPosts}
)(Posts);
