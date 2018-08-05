/* eslint-disable no-underscore-dangle */
import { AsyncStorage } from 'react-native';
import * as actions from '../constants/actionTypes';
import { loginRequestWithEmail } from '../service/firebaseService';
import {hideLoader, showLoader} from './loader';
import {handleFirebaseLoginError} from '../helpers/ErrorsHandler';

export const loginSuccess = () => ({
	type: actions.ACTION_LOGIN_USER_SUCCESS,
});

/*
https://www.jamestease.co.uk/blether/use-async-await-with-react-redux
//this is the action creator - no 'async' on the outer function since it just returns a function
*/
export const loginUser = (username, password) => async (dispatch) => {
	dispatch(showLoader());
	// wrap in try to listen for Promise rejections - equivalent of '.catch()'
	try {
		const userCreds = await loginRequestWithEmail(username, password);
		try {
			const strJson = JSON.stringify(userCreds.user);
			console.warn(strJson);
			await AsyncStorage.setItem(actions.PREF_USER, strJson);
		} catch (error) {
			// Error saving data
		}

		dispatch(hideLoader());
		dispatch(loginSuccess(userCreds.user));
	} catch (error) {
		dispatch(hideLoader());
		handleFirebaseLoginError(error);
	}
};
