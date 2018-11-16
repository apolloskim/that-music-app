import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { merge } from "lodash";

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      return merge({}, state, {[action.playlist.id]: action.playlist});
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default playlistsReducer;
