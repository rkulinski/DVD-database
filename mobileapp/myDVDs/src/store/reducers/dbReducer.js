import {
  DB_ADD_MOVIE,
  DB_SELECT_ACTOR,
  DB_READ_ACTORS_SUCCESS,
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
  default:
    return state;
  }
};
