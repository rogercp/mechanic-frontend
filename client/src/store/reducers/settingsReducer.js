import {
    GET_IMG_START ,
 GET_IMG_SUCCESS ,
GET_IMG_FAILURE ,
}from '../actions/settingsActions';

const initialState = {

    userImage:{},

}


const settingsReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_IMG_SUCCESS:
        return {
          ...state,
          userImage: action.payload
        };
        default: 
        return state 
    }

  };

  export default settingsReducer;