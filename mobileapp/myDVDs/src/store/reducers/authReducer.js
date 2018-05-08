import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_LOGIN_FAIL,
  AUTH_IS_USER_LOGGED_IN,
} from '../types';

const INITIAL_STATE = {
  email: '',
  loading: false,
  errorMsg: '',
  isLogged: false,
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
  case AUTH_LOGIN_USER_REQUEST:
    return {
      ...state,
      loading: true,
      errorMsg: '',
      isLogged: false
    };
  case AUTH_USER_LOGIN_SUCCESS:
    return {
      ...state,
      email: action.payload.email,
      errorMsg: '',
      loading: false,
      isLogged: true,
    };
  case AUTH_USER_LOGIN_FAIL:
    return {
      ...state,
      errorMsg: action.payload.error.message,
      loading: false,
      isLogged: false,
    };
  case AUTH_IS_USER_LOGGED_IN:
    return {
      ...state,
      isLogged: action.payload.flag,
      email: action.payload.user,
    };
  default:
    return state;
  }
};
