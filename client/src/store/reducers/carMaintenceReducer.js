import {
  FETCH_FIX_START,
  FETCH_FIX_SUCCESS,
  FETCH_FIX_FAILURE,
} from '../actions/carMaintenenceActions';

const initialState = {
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