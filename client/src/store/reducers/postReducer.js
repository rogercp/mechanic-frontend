import {
ADD_POST_START ,
 ADD_POST_SUCCESS,
 ADD_POST_FAILURE,
 FETCH_POST_START,
 FETCH_POST_SUCCESS,
 FETCH_POST_FAILURE,
 FETCH_FILTEREDPOST_START,
FETCH_FILTEREDPOST_SUCCESS,
FETCH_FILTEREDPOST_FAILURE,
}from '../actions/postActions';

const initialState = {
    addingPost:false,
    posts: [],
    filteredPosts:[],

}


const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_POST_SUCCESS:
        return {
          ...state,
          posts: action.payload
        };
        case FETCH_FILTEREDPOST_SUCCESS:
          return {
            ...state,
            filteredPosts: action.payload
          };
        default: 
        return state 
    }

  };

  export default postReducer;