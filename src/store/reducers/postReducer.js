import {
ADD_POST_START ,
 ADD_POST_SUCCESS ,
 ADD_POST_FAILURE ,
    
}from '../actions/postActions';

const initialState = {
    addingPost:false,

}


const postReducer = (state = initialState, action) => {

    switch (action.type) {
    
        default: 
        return state 
    }

  };

  export default postReducer;