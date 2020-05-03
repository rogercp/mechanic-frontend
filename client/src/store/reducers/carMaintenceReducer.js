import {
  FETCH_FIX_START,
  FETCH_FIX_SUCCESS,
  FETCH_FIX_FAILURE,
} from '../actions/carMaintenenceActions';

const initialState = {
  // dont know why I set this in global state but its here I think it was my first one with redux just 
  // a test but now its here and it works 
  fixes: [],
}


const carMaintenceReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_FIX_SUCCESS:
      return {
        ...state,
        fixes: action.payload
      };

    default:
      return state
  }
};

export default carMaintenceReducer;