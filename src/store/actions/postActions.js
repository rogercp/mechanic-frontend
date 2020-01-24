
import { axiosWithAuth } from '../../helpers/index';

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost= post => dispatch => {
  dispatch({ type: ADD_POST_START });
  return axiosWithAuth()
    .post('/post', post)
    .then(res => {
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
      window.location.reload();
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
  return axiosWithAuth()
    .get(`/post/all`) 
    .then(res => {
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err.response });
    });
};