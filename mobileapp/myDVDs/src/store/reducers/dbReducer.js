import {
  DB_SELECT_ACTOR,
  DB_READ_ACTORS_SUCCESS,
  DB_SAVE_TO_DB_REQUEST,
  DB_SAVE_TO_DB_SUCCESS,
  DB_SAVE_TO_DB_ERROR,
  DB_SAVE_TO_DB_EXISTS,
} from '../types';

const INITIAL_STATE = {
  actors: {
    schwarzenegger: [],
    stallone: [],
    seagal: [],
    vanDamme: [],
    norris: [],
  },
  selectedActorId: '',
  selectedActorName: '',
  actorsDb: {},
  savingMovie: false,
  saveSuccessful: false,
  existsInfo: '',
  error: {},
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
  case DB_SELECT_ACTOR:
    return {
      ...state,
      selectedActorId: action.payload.actorId,
      selectedActorName: action.payload.actor,
    };
  case DB_READ_ACTORS_SUCCESS:
    return {
      ...state,
      actorsDb: action.payload,
    };
  case DB_SAVE_TO_DB_REQUEST:
    return {
      ...state,
      savingMovie: true,
      saveSuccessful: false,
      existsInfo: '',
      error: {},
    };
  case DB_SAVE_TO_DB_SUCCESS:
    return {
      ...state,
      savingMovie: false,
      saveSuccessful: true,
    };
  case DB_SAVE_TO_DB_ERROR:
    return {
      ...state,
      savingMovie: false,
      saveSuccessful: false,
      error: action.payload,
    };
  case DB_SAVE_TO_DB_EXISTS:
    return {
      ...state,
      savingMovie: false,
      saveSuccessful: false,
      existsInfo: action.payload.message,
    };
  default:
    return state;
  }
};
