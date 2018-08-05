import * as Actions from '../constants/actionTypes';

const initialState = {
	loading: false,
	error: null,
	user: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case Actions.ACTION_SHOW_LOADER:
		return {...state, loading: true};
	case Actions.ACTION_HIDE_LOADER:
		return {...state, loading: false};
	default:
		return state;
	}
};
