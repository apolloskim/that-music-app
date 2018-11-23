import {RECEIVE_CURRENT_PLAYLISTS} from '../actions/playlist_actions';

const currentPlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYLISTS:
      return action.playlists || {};
    default:
      return state;
  }
};

export default currentPlaylistsReducer;
