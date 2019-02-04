import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLISTS } from '../actions/playlist_actions';
import { merge } from "lodash";

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case REMOVE_PLAYLISTS:
      return {};
    default:
      return state;
  }
};

export default playlistsReducer;
