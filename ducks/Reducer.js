import { combineReducers } from 'redux';
import lightReducer from './LightReducer'

export default combineReducers({
	lights: lightReducer
});
