import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dbReducer from './dbReducer';

export default combineReducers({
  auth: authReducer,
  actorsDB: dbReducer,
});
