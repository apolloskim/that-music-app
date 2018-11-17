import * as PlaylistApiUtil from '../util/playlist_api_utils';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists().then( playlists => dispatch(receivePlaylists(playlists)))
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id).then( playlist => dispatch(receivePlaylist(playlist)))
};


export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist)),
err => dispatch(receiveErrors(err)));
};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist)),
err => dispatch(receiveErrors(err)));
};

export const deletePlaylist = id => dispatch => {
  return PlaylistApiUtil.deletePlaylist(id).then( playlists => dispatch(receivePlaylists(playlists)) );
};

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receivePlaylist = ({playlist, songs}) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist,
    songs
  };
};

export const receivePlaylistErrors = (error) => {
  return {
    type: RECEIVE_PLAYLIST_ERRORS,
    error
  };
};
