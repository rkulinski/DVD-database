import dbReducer from '../../reducers/dbReducer';
import * as TYPES from '../../types';


describe('Database Reducers Tests', () => {
  const INITIAL_STATE = {
    actors: {
      schwarzenegger: [],
    },
  };
  const actor = 'schwarzenegger';
  const actorId = '111';
  const err = 'error';


  it('should handle DB_SELECT_ACTOR action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_SELECT_ACTOR,
      payload: {
        actorId: actorId,
        actor: actor,
      },
    });
    expect(reducerResponse).toEqual(({
      selectedActorId: actorId,
      selectedActorName: actor,
    }));
  });
  it('should handle DB_READ_ACTORS_SUCCESS action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_READ_ACTORS_SUCCESS,
      payload: actor,
    });
    expect(reducerResponse).toEqual(({
      actorsDb: actor,
    }));
  });
  it('should handle DB_SAVE_TO_DB_REQUEST action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_SAVE_TO_DB_REQUEST,
    });
    expect(reducerResponse).toEqual(({
      savingMovie: true,
      saveSuccessful: false,
      existsInfo: '',
      error: {},
    }));
  });
  it('should handle DB_SAVE_TO_DB_SUCCESS action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_SAVE_TO_DB_SUCCESS,
    });
    expect(reducerResponse).toEqual(({
      savingMovie: false,
      saveSuccessful: true,
    }));
  });
  it('should handle DB_SAVE_TO_DB_ERROR action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_SAVE_TO_DB_ERROR,
      payload: err,
    });
    expect(reducerResponse).toEqual(({
      savingMovie: false,
      saveSuccessful: false,
      error: err,
    }));
  });
  it('should handle DB_SAVE_TO_DB_EXISTS action type', () => {
    const reducerResponse = dbReducer({}, {
      type: TYPES.DB_SAVE_TO_DB_EXISTS,
      payload: { message: err },
    });
    expect(reducerResponse).toEqual(({
      savingMovie: false,
      saveSuccessful: false,
      existsInfo: err,
    }));
  });
  it('should handle unknown action type', () => {
    const reducerResponse = dbReducer(INITIAL_STATE, {
      type: 'UNKNOWN_TYPE',
    });
    expect(reducerResponse).toEqual(INITIAL_STATE);
  });
});

