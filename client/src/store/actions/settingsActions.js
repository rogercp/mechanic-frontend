import { axiosWithAuth } from '../../helpers/index';

export const GET_IMG_START = 'GET_IMG_START';
export const GET_IMG_SUCCESS = 'GET_IMG_SUCCESS';
export const GET_IMG_FAILURE = 'GET_IMG_FAILURE';

export const fetchProfileImage = userid => dispatch => {

  dispatch({ type: GET_IMG_START });
  return axiosWithAuth()
    .get(`/users/image/${userid}`)
    .then(res => {

      dispatch({ type: GET_IMG_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_IMG_FAILURE, payload: err.response });
    });
};
