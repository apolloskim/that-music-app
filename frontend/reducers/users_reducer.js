import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_LIKE_ARTIST} from '../actions/artist_actions';
import {RECEIVE_LIKE_ALBUM} from '../actions/album_actions';
import {RECEIVE_LIKE_SONG} from '../actions/song_actions';

import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_LIKE_ARTIST:
    case RECEIVE_LIKE_SONG:
    case RECEIVE_LIKE_ALBUM:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
