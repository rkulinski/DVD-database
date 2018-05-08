import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_LOGIN_FAIL,
  AUTH_IS_USER_LOGGED_IN,
} from '../types';
import firebase from 'firebase';
import firebaseConfig from '../../../firebase.config';


export const loginUserRequest = () => {
  return {
    type: AUTH_LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: AUTH_USER_LOGIN_SUCCESS,
    payload: { user },
  };
};

export const loginUserFail = (error) => {
  return {
    type: AUTH_USER_LOGIN_FAIL,
    payload: { error }
  };
};

export const isUserLoggedIn = (flag, user) => {
  return {
    type: AUTH_IS_USER_LOGGED_IN,
    payload: { flag, user },
  };
};

export const loginFirebase = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};


export const loginUser = (email, password) => {
  return(dispatch) => {
    dispatch(loginUserRequest());
    return loginFirebase(email, password)
      .then((user) => {
        dispatch(loginUserSuccess(user));
      })
      .catch((error) => {
        dispatch(loginUserFail(error));
      });
  };
};

export const initializeFirebase = () => {
  return () => {
    return firebase.initializeApp(firebaseConfig);
  };
};
