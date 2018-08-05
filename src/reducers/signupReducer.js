import * as actions from '../constants/actionTypes';

const initialState = {
	registerSuccess: false,
};

export default (state=initialState, action) => {
	switch(action.type) {
	case actions.ACTION_SIGNUP_SUCCESS:
		return Object.assign({}, state, {
			registerSuccess: true,
		});
	default:
		return state;
	}
};
