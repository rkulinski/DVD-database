import {
  DB_ADD_MOVIE,
  DB_SELECT_ACTOR,
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

export const selectActor = (actorId, actor) => {
  return {
    type: DB_SELECT_ACTOR,
    payload: {
      actorId,
      actor,
    },
  };
};
