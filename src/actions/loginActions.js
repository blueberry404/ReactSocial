/* eslint-disable no-underscore-dangle */
import { AsyncStorage } from 'react-native';
import * as types from '../constants/actionTypes';
import { loginRequestWithEmail } from '../config/firebase';

export const performLogin = () => ({
  type: types.ACTION_LOGGING_USER,
});

export const loginSuccess = data => ({
  type: types.ACTION_LOGIN_USER_SUCCESS,
  payload: data,
});

export const loginFailed = () => ({
  type: types.ACTION_LOGIN_USER_FAILURE,
});

/*
https://www.jamestease.co.uk/blether/use-async-await-with-react-redux
//this is the action creator - no 'async' on the outer function since it just returns a function
*/
export const loginUser = (username, password) => async (dispatch) => {
  dispatch(performLogin());
  // wrap in try to listen for Promise rejections - equivalent of '.catch()'
  try {
    const userCreds = await loginRequestWithEmail(username, password);
    console.log(userCreds);
    try {
      const strJson = JSON.stringify(userCreds.user._user);
      console.log(strJson);
      await AsyncStorage.setItem(types.PREF_USER, strJson);
    } catch (error) {
      // Error saving data
    }

    dispatch(loginSuccess(userCreds.user._user));
  } catch (error) {
    dispatch(loginFailed());
  }
};
