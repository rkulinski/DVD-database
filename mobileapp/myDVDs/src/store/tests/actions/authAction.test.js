import * as ACTIONS from '../../actions/authAction';
import * as TYPES from '../../types';


describe('Authorisation Actions:', () => {
  const sampleObject = {
    prop1: '',
    prop2: '',
  };

  it('loginUserRequest should return AUTH_LOGIN_USER_REQUEST action', () => {
    expect(ACTIONS.loginUserRequest()).toEqual({
      type: TYPES.AUTH_LOGIN_USER_REQUEST,
    });
  });

  it('loginUserRequest should return AUTH_USER_LOGIN_SUCCESS action', () => {
    expect(ACTIONS.loginUserSuccess(sampleObject)).toEqual({
      type: TYPES.AUTH_USER_LOGIN_SUCCESS,
      payload: { user: {...sampleObject} },
    });
  });

  it('loginUserRequest should return AUTH_USER_LOGIN_FAIL action', () => {
    expect(ACTIONS.loginUserFail(sampleObject)).toEqual({
      type: TYPES.AUTH_USER_LOGIN_FAIL,
      payload: { error: {...sampleObject} },
    });
  });
});
