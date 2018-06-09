import * as ACTIONS from '../../actions/authAction';
import * as TYPES from '../../types';


describe('Authorisation Actions:', () => {
  const sampleObject = {
    prop1: '',
    prop2: '',
  };
  const testMail = 'test@test.test';

  it('loginUserRequest should return AUTH_LOGIN_USER_REQUEST action', () => {
    expect(ACTIONS.loginUserRequest()).toEqual({
      type: TYPES.AUTH_LOGIN_USER_REQUEST,
    });
  });

  it('loginUserSuccess should return AUTH_USER_LOGIN_SUCCESS action', () => {
    expect(ACTIONS.loginUserSuccess(sampleObject)).toEqual({
      type: TYPES.AUTH_USER_LOGIN_SUCCESS,
      payload: { user: {...sampleObject} },
    });
  });
  it('loginUserFail should return AUTH_USER_LOGIN_FAIL action', () => {
    expect(ACTIONS.loginUserFail(sampleObject)).toEqual({
      type: TYPES.AUTH_USER_LOGIN_FAIL,
      payload: { error: {...sampleObject} },
    });
  });
  it('isUserLoggedIn should return AUTH_IS_USER_LOGGED_IN action', () => {
    expect(ACTIONS.isUserLoggedIn(true, testMail)).toEqual({
      type: TYPES.AUTH_IS_USER_LOGGED_IN,
      payload: { flag: true, user: testMail },
    });
  });
});
