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


  it('addMovie should return DB_ADD_MOVIE action', () => {
    expect(ACTIONS.addMovie(actor, movieTitle)).toEqual({
      type: TYPES.DB_ADD_MOVIE,
      payload: {
        actor,
        movieTitle,
      },
    });
  });
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
});
