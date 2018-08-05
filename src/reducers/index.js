import { combineReducers } from 'redux';
import login from './loginReducer';
import signUp from './signupReducer';
import app from './appReducer';

export default combineReducers({
	login,
	signUp,
	app,
});
