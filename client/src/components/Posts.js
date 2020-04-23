import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../helpers/index';
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
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
  
//  const [orderBy,setOrderBy] = useState({

//    order:props.orderPosts

//   })
  
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



// useEffect(()=>{
//   props.fetchFilteredPosts("AllPosts",'date')
// },[])



  function onFirstLoad(){

     axios
      .post(`${process.env.REACT_APP_API_URL}/post/filterCategory`, { category: 'AllPosts' , order: 'date', })
      .then(res => {
        setInitialLoadPosts(res.data.data)

      })
      .catch(err => {
        console.log(err)
      });

  
    

  }

  // useEffect(() => {
  //   props.fetchFilteredPosts("AllPosts",'date')
  // });
// const handleChange = name => event => {
//   setOrderBy({
//     ...orderBy,
//     [name]: event.target.value,
//   });

// };



  console.log(props.orderPosts,"orderPost")

  if (props.searchToggle === true) {

    return (

      <>

        <Search searchPostsHandler={searchPostsHandler} />
        {/* <Select
          native
          name="order"
          value={orderBy.order}
          onChange={handleChange('order')}
          inputProps={{
            name: 'type',
            id: 'outlined-type-native-simple',
          }}
        >
          <option value={"date"}>date</option>
          <option value={"likes"}>likes</option>
        
        </Select> */}

        <OrderPosts/>

<Pagination/>
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
      </>

    )
  }
else if( props.filteredPosts.length < 1 && props.searchToggle === false){

  return (
    <>

      <Search searchPostsHandler={searchPostsHandler} />

    
      <OrderPosts/>
      <Pagination/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

     
            {initalLoadPosts.map(p => {

              return (
                <>
                  <IndividualPost post={p} key={caches.uid}  fetchPosts={props.fetchFilteredPosts} />
                </>
              );
            })}
        


      </div>
    </>
  );
}

  else  {
    return (
      <>

        <Search searchPostsHandler={searchPostsHandler} />

        
        {/* <Select
          native
          name="order"
          value={orderBy.order}
          onChange={handleChange('order')}
          inputProps={{
            name: 'type',
            id: 'outlined-type-native-simple',
          }}
        >
          <option value={"date"}>date</option>
          <option value={"likes"}>likes</option>
        
        </Select> */}
        <OrderPosts/>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

       
              {props.filteredPosts.map(p => {
                console.log(p, "each post")
                return (
                  <>
                    <IndividualPost post={p}  fetchPosts={props.fetchFilteredPosts} />
                  </>
                );
              })}
          
  

        </div>
      </>
    );
  }
  


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
)(Posts);