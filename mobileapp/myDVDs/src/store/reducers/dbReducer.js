import {
  DB_ADD_MOVIE,
} from '../types';

const INITIAL_STATE = {
  actors: {
    schwarzenegger: [],
  },
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
  case DB_ADD_MOVIE:
    return {
      ...state,
      actors: {
        ...state.actors,
        [action.payload.actor]: [
          ...state.actors[action.payload.actor],
          action.payload.movieTitle,
        ],
      },
    };
  default:
    return state;
  }
};
