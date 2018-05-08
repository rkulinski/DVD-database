import authReducer from '../../reducers/authReducer';
import * as TYPES from '../../types';


describe('Authentication Reducers Tests', () => {
  const testEmail = 'email@test.test';
  const testErrorMsg = 'error';

  it('should handle AUTH_LOGIN_USER_REQUEST', () => {
    const reducerResponse = authReducer([], {
      type: TYPES.AUTH_LOGIN_USER_REQUEST,
    });
    expect(reducerResponse).toEqual({
      loading: true,
      errorMsg: '',
      isLogged: false,
    });
  });
  it('should handle AUTH_USER_LOGIN_SUCCESS', () => {
    const reducerResponse = authReducer([], {
      type: TYPES.AUTH_USER_LOGIN_SUCCESS,
      payload: {
        email: testEmail,
      }
    });
    expect(reducerResponse).toEqual({
      email: testEmail,
      errorMsg: '',
      loading: false,
      isLogged: true,
    });
  });
  it('should handle AUTH_USER_LOGIN_FAIL', () => {
    const reducerResponse = authReducer([], {
      type: TYPES.AUTH_USER_LOGIN_FAIL,
      payload: {
        error: {
          message: testErrorMsg,
        },
      }
    });
    expect(reducerResponse).toEqual({
      errorMsg: testErrorMsg,
      loading: false,
      isLogged: false,
    });
  });
  it('should handle AUTH_IS_USER_LOGGED_IN', () => {
    const reducerResponse = authReducer([], {
      type: TYPES.AUTH_IS_USER_LOGGED_IN,
      payload: { flag: true, user: testEmail },
    });
    expect(reducerResponse).toEqual({
      isLogged: true,
      email: testEmail,
    });
  });
  it('should handle unknown action type', () => {
    const reducerResponse = authReducer(undefined, {
      type: 'UNKNOWN_TYPE',
    });
    expect(reducerResponse).toEqual({
      email: '',
      loading: false,
      errorMsg: '',
      isLogged: false,
    });
  });
});

