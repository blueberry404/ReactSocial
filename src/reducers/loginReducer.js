import * as types from '../constants/actionTypes';

const initialState = {
	loginSuccess: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case types.ACTION_LOGIN_USER_SUCCESS:
		return {
			...state, loginSuccess: true,
		};
	default:
		return state;
	}
};
