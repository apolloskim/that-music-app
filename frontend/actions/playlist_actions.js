import * as PlaylistApiUtil from '../util/playlist_api_utils';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const RECEIVE_CURRENT_PLAYLISTS = "RECEIVE_CURRENT_PLAYLISTS";
export const REMOVE_PLAYLISTS = "REMOVE_PLAYLISTS";
export const REMOVE_CURRENT_PLAYLISTS = "REMOVE_CURRENT_PLAYLISTS";
export const RECEIVE_VISITED_PLAYLIST = "RECEIVE_VISITED_PLAYLIST";

export const fetchPlaylists = (queries) => dispatch => {
  return PlaylistApiUtil.fetchPlaylists(queries).then( playlists => dispatch(receivePlaylists(playlists)))
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id).then( playlist => dispatch(receivePlaylist(playlist)))
};

export const fetchVisitedPlaylist = id => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id).then( playlist => dispatch(receiveVisitedPlaylist(playlist)))
};

export const receiveVisitedPlaylist = playlist => {
  return {
    type: RECEIVE_VISITED_PLAYLIST,
    playlist
  };
};

export const removePlaylists = () => {
  return {
    type: REMOVE_PLAYLISTS
  };
};

export const removeCurrentPlaylists = () => {
  return {
    type: REMOVE_CURRENT_PLAYLISTS
  };
};

export const fetchCurrentPlaylists = id => dispatch => {
  return $.ajax({
    url: `/api/users/${id}`
  }).then( user => dispatch(receiveCurrentPlaylists(user.playlists) ));
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist).then( playlist => {
    dispatch(receivePlaylist(playlist))
  },
err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist)),
err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const deletePlaylist = id => dispatch => {
  return PlaylistApiUtil.deletePlaylist(id);
  // .then( response => console.log(response) );
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
