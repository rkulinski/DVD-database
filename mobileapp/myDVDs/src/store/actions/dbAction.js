import firebase from 'firebase';
import _ from 'underscore';
import {
  DB_ADD_MOVIE,
  DB_SELECT_ACTOR,
  DB_READ_ACTORS_SUCCESS,
} from '../types';
import ArnoldImg from '../../assets/tilesImages/Arnold.jpg';
import StalloneImg from '../../assets/tilesImages/Stallone.jpg';
import JCVDImg from '../../assets/tilesImages/JCVD.jpg';
import Steven from '../../assets/tilesImages/Steven.jpg';
import Chuck from '../../assets/tilesImages/Chuck.jpg';

const imagesToActorMatcher = {
  schwarzenegger: ArnoldImg,
  stallone: StalloneImg,
  vanDamme: JCVDImg,
  seagal: Steven,
  norris: Chuck,
};


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

export const readActorsSuccess = (data) => {
  return {
    type: DB_READ_ACTORS_SUCCESS,
    payload: data,
  };
};

export const processActors = (data, matcher) => {
  return _.mapObject(data, (val, key) => {
    if (matcher[key]) {
      return {...val, img: matcher[key]};
    }
    return val;
  });
};

export const readActorsFromDatabase = () => {
  return (dispatch) => {
    firebase.database().ref('actors')
      .on('value', snapshot => {
        const data = processActors(snapshot.val(), imagesToActorMatcher);
        dispatch(readActorsSuccess(data));
      });
  };
};
