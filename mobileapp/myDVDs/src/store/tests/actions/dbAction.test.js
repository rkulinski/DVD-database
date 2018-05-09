import * as ACTIONS from '../../actions/dbAction';
import * as TYPES from '../../types';


describe('Database Actions:', () => {
  const actor = 'arni';
  const movieTitle = 'movie';

  it('addMovie should return DB_ADD_MOVIE action', () => {
    expect(ACTIONS.addMovie(actor, movieTitle)).toEqual({
      type: TYPES.DB_ADD_MOVIE,
      payload: {
        actor,
        movieTitle,
      },
    });
  });
});
