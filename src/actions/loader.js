import { ACTION_HIDE_LOADER, ACTION_SHOW_LOADER } from '../constants/actionTypes';

export const showLoader = () => ({
	type: ACTION_SHOW_LOADER,
});

export const hideLoader = () => ({
	type: ACTION_HIDE_LOADER,
});
