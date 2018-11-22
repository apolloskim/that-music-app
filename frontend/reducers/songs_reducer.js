import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import {merge} from 'lodash';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
      return action.songs || {};
    default:
      return state;
  }
};

export default songsReducer;
