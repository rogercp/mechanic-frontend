import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
import {updatePageNumber} from '../store/actions/postActions'
// import { changeOrderPosts } from "../store/actions/postActions";
// import { fetchPosts } from "../store/actions/postActions";
import Pagination from './Pagination'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Search from "./Search";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/Select';
import OrderPosts from './OrderPosts'
import axios from 'axios';



function Posts(props) {

  const [searchPosts, setsearchPosts] = useState([])

  const [initalLoadPosts, setInitialLoadPosts] = useState([])

  const [numPages,setNumPages] = useState()
  
//  const [orderBy,setOrderBy] = useState({

//    order:props.orderPosts

//   })

const [order,setOrder] = useState()
  
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
  

    // if(props.orderPosts !== order){
    //   props.fetchFilteredPosts("AllPosts",`${props.orderPosts}`,1)

    // }else{

      props.fetchFilteredPosts(`${props.currentTermForFilter}`,`${props.orderPosts}`,`${props.currentPage}`)

    // }
    // setOrder(props.orderPosts)
    
  }, [props.currentPage,props.currentTermForFilter]);






  function onFirstLoad(){

     axios
      .post(`${process.env.REACT_APP_API_URL}/post/filterCategory`, { category: 'AllPosts' , order: 'date', currentPage:props.currentPage })
      .then(res => {
        setInitialLoadPosts(res.data.data)
        setNumPages(res.data.pagination.lastPage)
        
      })
      .catch(err => {
        console.log(err)
      });

  
  }

  console.log(props.currentTermForFilter,"currentTermForFilter")
  console.log(props.orderPosts,"orderPosts")
  console.log(props.currentPage,"currentPage")
 
 




  


  if (props.searchToggle === true) {

    return (

      <>

        <Search searchPostsHandler={searchPostsHandler} />
       
        <Pagination numPages={numPages}/>
        <OrderPosts/>


        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          {

            searchPosts.map(p => {
              return (
                <>
                  <IndividualPost post={p} key={caches.uid}  fetchPosts={props.fetchFilteredPosts} />
                </>
              );
            })


          }



        </div>
        {/* <Pagination numPages={numPages}/> */}
      </>

    )
  }
else if( props.filteredPosts.length < 1 && props.searchToggle === false){

  return (
    <>

      <Search searchPostsHandler={searchPostsHandler} />

      <Pagination numPages={numPages}/>
      <OrderPosts/>
     
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

     
            {initalLoadPosts.map(p => {

              return (
                <>
                  <IndividualPost post={p} key={caches.uid}  fetchPosts={props.fetchFilteredPosts} />
                </>
              );
            })}
        


      </div>
      {/* <Pagination numPages={numPages}/> */}
    </>
  );
}

  else  {
    return (
      <>

        <Search searchPostsHandler={searchPostsHandler} />

        
        <Pagination numPages={props.filteredPosts.pagination.lastPage}/>
        <OrderPosts />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

       
              {props.filteredPosts.data.map(p => {
                return (
                  <>
                    <IndividualPost post={p}  numPages={props.filteredPosts.pagination.lastPage} fetchPosts={props.fetchFilteredPosts} />
                  </>
                );
              })}
          
  

        </div>
        {/* <Pagination numPages={numPages}/> */}

      </>
    );
  }
  


};


const mapStateToProps = state => ({
  searchToggle: state.post.searchToggle,
  myposts: state.post.posts,
  filteredPosts: state.post.filteredPosts,
  orderPosts: state.post.order,
  currentPage :state.post.currentpage,
  currentTermForFilter:state.post.currentTermForFilter
});
export default connect(
  mapStateToProps,
  { toggleSearchToTrue, fetchFilteredPosts ,updatePageNumber}
)(Posts);