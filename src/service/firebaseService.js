import firebase from 'react-native-firebase';

export const initializeFirebase = () => {
	firebase.initializeApp({
		//copy key-value from console here
	});
};

const usersNode = 'users';

export async function loginRequestWithEmail(username, password) {
	const response = await firebase.app().auth().signInAndRetrieveDataWithEmailAndPassword(username, password);
	console.log(response);
	return response;
}

export async function signupUser(email, password) {
	const response = await firebase.app().auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
	console.log(response);
	return response;
}

export async function insertNewUser(email, firstname, lastname, callback) {
	firebase.database().ref(usersNode).push({
		email,
		firstname,
		lastname,
	}, callback);
}
