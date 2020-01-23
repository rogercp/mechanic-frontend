
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