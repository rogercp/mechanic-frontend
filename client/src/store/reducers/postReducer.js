import {
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_FILTEREDPOST_START,
  FETCH_FILTEREDPOST_SUCCESS,
  FETCH_FILTEREDPOST_FAILURE,
  TOGGLE_SEARCH_TO_TRUE,
  TOGGLE_SEARCH_TO_FALSE,
  CHANGE_ORDER_POSTS
} from '../actions/postActions';

const initialState = {
  addingPost: false,
  posts: [],
  filteredPosts: [],
  searchToggle: false,
  currentPost: {},
  order: 'date'
}


const postReducer = (state = initialState, action) => {

  switch (action.type) {


    case ADD_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    case CHANGE_ORDER_POSTS:
      return {
        ...state,
        order: action.payload
      };
    case FETCH_FILTEREDPOST_SUCCESS:
      return {
        ...state,
        filteredPosts: action.payload
      };
    case TOGGLE_SEARCH_TO_TRUE:
      return {
        ...state,
        searchToggle: true
      }

    case TOGGLE_SEARCH_TO_FALSE:
      return {
        ...state,
        searchToggle: false
      }

    default:
      return state
  }

};

export default postReducer;