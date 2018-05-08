import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_LOGIN_FAIL,
} from '../types';
import firebase from 'firebase';


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
