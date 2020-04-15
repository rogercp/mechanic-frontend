import { combineReducers } from 'redux';
import postReducer from './postReducer';
import settingsReducer from './settingsReducer';
import carMaintenceReducer from './carMaintenceReducer';

export default combineReducers({
    post: postReducer,
    setting: settingsReducer,
    maintenence: carMaintenceReducer,
})

