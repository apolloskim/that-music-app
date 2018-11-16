import {RECEIVE_PLAYLIST_ERRORS, RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST} from '../actions/session_actions';
import {merge} from 'lodash';

const playlistErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_ERRORS:
      return action.error;
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
      return [];
    default:
      return state;
  }
};

export default playlistErrorsReducer;
