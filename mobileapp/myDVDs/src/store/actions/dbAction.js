import firebase from 'firebase';
import _ from 'underscore';
import {
  DB_SELECT_ACTOR,
  DB_READ_ACTORS_SUCCESS,
  DB_SAVE_TO_DB_REQUEST,
  DB_SAVE_TO_DB_SUCCESS,
  DB_SAVE_TO_DB_ERROR,
  DB_SAVE_TO_DB_EXISTS,
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

export const saveToDbRequest = () => {
  return {
    type: DB_SAVE_TO_DB_REQUEST,
  };
};

export const saveToDbSuccess = () => {
  return {
    type: DB_SAVE_TO_DB_SUCCESS,
  };
};

export const saveToDbError = (error) => {
  return {
    type: DB_SAVE_TO_DB_ERROR,
    payload: error,
  };
};

export const safeToDbExists = (error) => {
  return {
    type: DB_SAVE_TO_DB_EXISTS,
    payload: error,
  };
};

export const checkForDuplicate = ({ list, title, year }) => {
  const values = Object.values(list);
  //To be done
};

export const saveMovieToDb = ({ actorId, newTitle, year }) => {
  return (dispatch) => {
    dispatch(saveToDbRequest());
    const movie_id = `${year}_${newTitle.toLowerCase()}`;
    firebase.database().ref(`actors/${actorId}/movies/${movie_id}`)
      .on('value', snapshot => {
        if (snapshot.val() === null) {
          firebase.database().ref(`actors/${actorId}/movies/`).push({
            year: year,
            title: newTitle,
          }).then(() => {
            dispatch(saveToDbSuccess());
          }).catch((err) => {
            dispatch(saveToDbError(err));
          });
        } else {
          dispatch(safeToDbExists({message: 'This movie already exists in Database!'}));
        }
      });
  };
};
