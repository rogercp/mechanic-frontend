import {
    ADD_TODO,
    
  } from '../actions/mechActions';


  const initialState = {
    todos:[
        {
            id:0,
            text:'throw out trash',
            completed:false,
            
        }
    ],

}


const mechReducers = (state = initialState, action) => {

    switch (action.type) {
            case ADD_TODO:
            return Object.assign({},state,{todos:[...state.todos,action.payload]})
            default:
            return state
        }
  };
  
export default mechReducers;