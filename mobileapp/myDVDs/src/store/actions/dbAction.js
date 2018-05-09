import {
  DB_ADD_MOVIE,
} from '../types';


export const addMovie = (actor, movieTitle) => {
  return {
    type: DB_ADD_MOVIE,
    payload: {
      actor,
      movieTitle,
    },
  };
};
