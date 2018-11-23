import * as PlaylistApiUtil from '../util/playlist_api_utils';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const RECEIVE_CURRENT_PLAYLISTS = "RECEIVE_CURRENT_PLAYLISTS";

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists().then( playlists => dispatch(receivePlaylists(playlists)))
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id).then( playlist => dispatch(receivePlaylist(playlist)))
};

export const fetchCurrentPlaylists = id => dispatch => {
  return $.ajax({
    url: `/api/users/${id}`
  }).then( user => dispatch(receiveCurrentPlaylists(user.playlists) ));
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist)),
err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist)),
err => dispatch(receivePlaylistErrors(err.responseJSON)));
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

export const receiveCurrentPlaylists = (playlists) => {
  return {
    type: RECEIVE_CURRENT_PLAYLISTS,
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
