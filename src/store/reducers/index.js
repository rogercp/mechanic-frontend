import {combineReducers} from 'redux';
import mechReducers from './mechReducers';

export default combineReducersP({
    mech : mechReducers
})