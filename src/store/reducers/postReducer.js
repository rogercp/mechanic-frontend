import {
ADD_POST_START ,
 ADD_POST_SUCCESS,
 ADD_POST_FAILURE,
 FETCH_POST_START,
 FETCH_POST_SUCCESS,
 FETCH_POST_FAILURE,
}from '../actions/postActions';

const initialState = {
    addingPost:false,
    posts: [],

}


const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_POST_SUCCESS:
        return {
          ...state,
          posts: action.payload
        };
        default: 
        return state 
    }

  };

  export default postReducer;