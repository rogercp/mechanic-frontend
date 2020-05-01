
import { axiosWithAuth } from '../../helpers/index';
import axios from 'axios';

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = post => dispatch => {

  dispatch({ type: ADD_POST_START });
  return axiosWithAuth()
    .post('/post', post)
    .then(res => {
      // console.log(res.data,"this is from the post action id")
      // const currentPostId=res.data.id
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
      // return currentPostId

    })
    .catch(err => {
      dispatch({ type: ADD_POST_FAILURE, payload: err.response });
    });
};


export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';


export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POST_START });
  axios
    .get(`${process.env.REACT_APP_API_URL}/post/all`)
    .then(res => {
      console.log(res.data, "post")
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_POST_FAILURE, payload: err.response });
    });
};



export const FETCH_FILTEREDPOST_START = 'FETCH_FILTEREDPOST_START';
export const FETCH_FILTEREDPOST_SUCCESS = 'FETCH_FILTEREDPOST_SUCCESS';
export const FETCH_FILTEREDPOST_FAILURE = 'FETCH_FILTEREDPOST_FAILURE';

export const CURRENT_TERM_FOR_FILTER = 'CURRENT_TERM_FOR_FILTER'
export const CHANGE_ORDER_POSTS = 'CHANGE_ORDER_POSTS';
// export const CURRENT_PAGE_FOR_ORDERED_POSTS = 'CURRENT_PAGE_FOR_ORDERED_POSTS';

export const fetchFilteredPosts = (term,orderTerm,currentPage) => dispatch => {
  console.log(term,orderTerm,currentPage,"terms ----- in actions")
  dispatch({ type: FETCH_FILTEREDPOST_START });
  return axios
    .post(`${process.env.REACT_APP_API_URL}/post/filterCategory`, { category: term , order: orderTerm,currentPage:currentPage })
    .then(res => {
      dispatch({type:CURRENT_TERM_FOR_FILTER,payload:term})
      dispatch({ type: FETCH_FILTEREDPOST_SUCCESS, payload: res.data });
      dispatch({ type: CHANGE_ORDER_POSTS ,payload: orderTerm});
      updatePageNumber(currentPage);

    })
    .catch(err => {
      dispatch({ type: FETCH_FILTEREDPOST_FAILURE, payload: err.response });
    });
};


// toggles search 
export const TOGGLE_SEARCH_TO_TRUE = 'TOGGLE_SEARCH_TO_TRUE';

export const toggleSearchToTrue = () => dispatch => {

  dispatch({ type: TOGGLE_SEARCH_TO_TRUE });

};

// toggles search
export const TOGGLE_SEARCH_TO_FALSE = 'TOGGLE_SEARCH_TO_FALSE';

export const toggleSearchToFalse = () => dispatch => {

  dispatch({ type: TOGGLE_SEARCH_TO_FALSE });

};


// export const CHANGE_ORDER_POSTS = 'CHANGE_ORDER_POSTS';

// export const  changeOrderPosts = (orderTerm) => dispatch => {

//   dispatch({ type: CHANGE_ORDER_POSTS ,payload: orderTerm});

// };

export const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER"

export const  updatePageNumber = (number) => dispatch => {
console.log(number, "number iin action post")
  dispatch({ type: UPDATE_PAGE_NUMBER ,payload: number});

};