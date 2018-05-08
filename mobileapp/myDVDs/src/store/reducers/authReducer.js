import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_LOGIN_FAIL,
} from '../types';

const INITIAL_STATE = {
  email: '',
  loading: false,
  errorMsg: '',
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
  case AUTH_LOGIN_USER_REQUEST:
    return {...state, loading: true, errorMsg: ''};
  case AUTH_USER_LOGIN_SUCCESS:
    return {
      ...state,
      email: action.payload.email,
      errorMsg: '',
      loading: false,
    };
  case AUTH_USER_LOGIN_FAIL:
    return {
      ...state,
      errorMsg: action.payload.error.message,
      loading: false,
    };
  default:
    return state;
  }
};
