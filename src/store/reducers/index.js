import {combineReducers} from 'redux';
import mechReducers from './mechReducers';

export default combineReducers({
    mech : mechReducers
})

