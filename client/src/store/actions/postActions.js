
import { axiosWithAuth } from '../../helpers/index';
import axios from 'axios';

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost= post => dispatch => {
 
  dispatch({ type: ADD_POST_START });
  return axiosWithAuth()
    .post('/post', post)
    .then(res => {
      
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
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
      console.log(res.data,"post")
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err.response });
    });
};



export const FETCH_FILTEREDPOST_START = 'FETCH_FILTEREDPOST_START';
export const FETCH_FILTEREDPOST_SUCCESS = 'FETCH_FILTEREDPOST_SUCCESS';
export const FETCH_FILTEREDPOST_FAILURE = 'FETCH_FILTEREDPOST_FAILURE';


export const fetchFilteredPosts = term => dispatch => {
  console.log(term,"term")
  dispatch({ type: FETCH_FILTEREDPOST_START });
  return axiosWithAuth()
    .post('/post/filterCategory', {category:term}) 
    .then(res => {
      console.log(res.data,"filteredpost")
      dispatch({ type: FETCH_FILTEREDPOST_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_FILTEREDPOST_FAILURE, payload: err.response });
    });
};



export const TOGGLE_SEARCH_TO_TRUE = 'TOGGLE_SEARCH_TO_TRUE';

export const toggleSearchToTrue = () => dispatch => {

  dispatch({ type: TOGGLE_SEARCH_TO_TRUE });
 
};


export const TOGGLE_SEARCH_TO_FALSE = 'TOGGLE_SEARCH_TO_FALSE';

export const toggleSearchToFalse = () => dispatch => {

  dispatch({ type: TOGGLE_SEARCH_TO_FALSE });
 
};
