import * as ACTIONS from '../../actions/dbAction';
import * as TYPES from '../../types';


describe('Database Actions:', () => {
  const actor = 'arni';
  const movieTitle = 'movie';
  const actorId = '111';
  const imagesToActorMatcher = {
    arni: 'image',
    sly: 'image',
  };
  const actorObj = {
    arni: {},
    sly: {},
    norris: {},
  };


  it('selectActor should return DB_SELECT_ACTOR action', () => {
    expect(ACTIONS.selectActor(actorId, actor)).toEqual({
      type: TYPES.DB_SELECT_ACTOR,
      payload: {
        actorId,
        actor,
      },
    });
  });
  it('readActorsSuccess should return DB_READ_ACTORS_SUCCESS action', () => {
    expect(ACTIONS.readActorsSuccess(movieTitle)).toEqual({
      type: TYPES.DB_READ_ACTORS_SUCCESS,
      payload: movieTitle,
    });
  });
  it('adds img property to actors and if no image provided returns value', () => {
    expect(ACTIONS.processActors(actorObj, imagesToActorMatcher)).toEqual({
      arni: {img: 'image'},
      sly: {img: 'image'},
      norris: {},
    });
  });
  it('saveToDbRequest should return DB_SAVE_TO_DB_REQUEST action', () => {
    expect(ACTIONS.saveToDbRequest()).toEqual({
      type: TYPES.DB_SAVE_TO_DB_REQUEST,
    });
  });
  it('saveToDbSuccess should return DB_SAVE_TO_DB_SUCCESS action', () => {
    expect(ACTIONS.saveToDbSuccess()).toEqual({
      type: TYPES.DB_SAVE_TO_DB_SUCCESS,
    });
  });
  it('saveToDbError should return DB_SAVE_TO_DB_ERROR action', () => {
    expect(ACTIONS.saveToDbError()).toEqual({
      type: TYPES.DB_SAVE_TO_DB_ERROR,
    });
  });
  it('safeToDbExists should return DB_SAVE_TO_DB_EXISTS action', () => {
    expect(ACTIONS.safeToDbExists()).toEqual({
      type: TYPES.DB_SAVE_TO_DB_EXISTS,
    });
  });
});
