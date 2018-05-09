import dbReducer from '../../reducers/dbReducer';
import * as TYPES from '../../types';


describe('Database Reducers Tests', () => {
  const INITIAL_STATE = {
    actors: {
      schwarzenegger: [],
    },
  };
  const actor = 'schwarzenegger';
  const movieTitle = 'movie';

  it('should handle DB_ADD_MOVIE', () => {
    const reducerResponse = dbReducer(INITIAL_STATE, {
      type: TYPES.DB_ADD_MOVIE,
      payload: {
        actor,
        movieTitle,
      },
    });
    expect(reducerResponse).toEqual({
      actors: {
        schwarzenegger: [movieTitle],
      },
    });
  });
  it('should handle unknown action type', () => {
    const reducerResponse = dbReducer(INITIAL_STATE, {
      type: 'UNKNOWN_TYPE',
    });
    expect(reducerResponse).toEqual(INITIAL_STATE);
  });
});

