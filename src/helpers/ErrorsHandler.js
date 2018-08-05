import {showToast} from './UIHelper';

const ERR_FIREBASE_INVALID_EMAIL = 'auth/invalid-email';
const ERR_FIREBASE_USER_DISABLED = 'auth/user-disabled';
const ERR_FIREBASE_NOT_FOUND = 'auth/user-not-found';
const ERR_FIREBASE_INVALID_PASS = 'auth/wrong-password';

const ERR_GENERAL = 'An error occured. Please try again later';

export function handleFirebaseLoginError(error) {
	if (!error) return;
	switch(error.code) {
	case ERR_FIREBASE_INVALID_EMAIL:
		showToast('Email entered is invalid');
		break;
	case ERR_FIREBASE_USER_DISABLED:
		showToast('User is disabled. Please contact administrator.');
		break;
	case ERR_FIREBASE_NOT_FOUND:
		showToast('This email does not exist');
		break;
	case ERR_FIREBASE_INVALID_PASS:
		showToast('Password entered is invalid');
		break;
	default:
		showToast(ERR_GENERAL);
		break;
	}
}

export function handleError(error) {
	showToast(JSON.stringify(error));
}