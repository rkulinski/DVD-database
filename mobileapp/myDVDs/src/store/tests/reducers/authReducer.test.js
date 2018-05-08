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
    });
  });
});

