import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export default (state = initialState.test, action) => {
    switch(action.type) {
        case types.ACTION_NAVIGATE_LOGIN:
            return {
                ...state
            };
        default:
            return state;
    }
};