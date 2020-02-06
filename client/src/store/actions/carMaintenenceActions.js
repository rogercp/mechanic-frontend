import { axiosWithAuth } from '../../helpers/index';
import axios from 'axios';


export const FETCH_FIX_START = 'FETCH_FIX_START';
export const FETCH_FIX_SUCCESS = 'FETCH_FIX_SUCCESS';
export const FETCH_FIX_FAILURE = 'FETCH_FIX_FAILURE';


export const fetchFixes = (id) => dispatch => {
  dispatch({ type: FETCH_FIX_START });
  return axiosWithAuth()
    .get(`/car_fix/${id}`) 
    .then(res => {
        dispatch({ type: FETCH_FIX_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_FIX_FAILURE, payload: err.response });
    });
};

