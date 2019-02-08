import {RECEIVE_CURRENT_PLAYLISTS, REMOVE_CURRENT_PLAYLISTS} from '../actions/playlist_actions';

const currentPlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLISTS:
      return action.playlists || {};
    case REMOVE_CURRENT_PLAYLISTS:
      return {};
    default:
      return state;
  }
};

export default currentPlaylistsReducer;
