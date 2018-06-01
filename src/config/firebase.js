import firebase from 'react-native-firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyBwgKD2clwqHOgl0-OE-EchOWU_qnmfr3I',
    authDomain: 'reactsocial-5475f.firebaseapp.com',
    databaseURL: 'https://reactsocial-5475f.firebaseio.com',
    projectId: 'reactsocial-5475f',
    storageBucket: 'reactsocial-5475f.appspot.com',
    messagingSenderId: '654063366123',
  });
};

export async function loginRequestWithEmail(username, password) {
    const response = await firebase.app().auth().signInAndRetrieveDataWithEmailAndPassword(username, password);
    console.log(response);
    return response;
}
