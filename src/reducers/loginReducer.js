import * as types from '../constants/actionTypes';

const initialState = {
	isLoading: false,
	error: false,
	user: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case types.ACTION_LOGGING_USER:
		return {
			...state, isLoading: true, error: false, user: null,
		};
	case types.ACTION_LOGIN_USER_SUCCESS:
		return {
			...state, isLoading: false, error: false, user: action.payload,
		};
	case types.ACTION_LOGIN_USER_FAILURE:
		return {
			...state, isLoading: false, error: true, user: null,
		};
	default:
		return state;
	}
};
