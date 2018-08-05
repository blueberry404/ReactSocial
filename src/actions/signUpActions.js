import * as actions from '../constants/actionTypes';
import { showLoader, hideLoader } from './loader';
import * as helper from '../service/firebaseService';
import * as ErrorHelper from '../helpers/ErrorsHandler';

const signUpSuccess = (payload) => ({
	type: actions.ACTION_SIGNUP_SUCCESS,
	payload,
});

export const signUpUser = (user) => dispatch => {
	dispatch(showLoader());
	const { email, password, firstname, lastname } = user;
	try {
		helper.signupUser(email, password);
		const promise = helper.insertNewUser(email, firstname, lastname, (val) => {
			if(val == null) {
				dispatch(hideLoader());
				dispatch(signUpSuccess(promise));
			}
			else {
				dispatch(hideLoader());
				alert(JSON.stringify(promise));
			}
		});
	}
	catch(error) {
		dispatch(hideLoader());
		ErrorHelper.handleError(error);
	}
};
