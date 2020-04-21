
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToTrue } from "../store/actions/postActions";
import { changeOrderPosts } from "../store/actions/postActions";
import Select from '@material-ui/core/Select';


function OrderPosts(props) {

  
  const [orderBy,setOrderBy] = useState({

    order:props.orderPosts
 
   })


  useEffect(() => {
   
   
  props.changeOrderPosts(orderBy.order)
      
  
  }, [orderBy.order]);



   const handleChange = name => event => {
    setOrderBy({
      ...orderBy,
      [name]: event.target.value,
    });
  
  };


  console.log(props.orderPosts,'coming corm redux orderf')

  return (

    <>
    <Select
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
          
          </Select>

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
  { toggleSearchToTrue, fetchFilteredPosts, changeOrderPosts }
)(OrderPosts);

