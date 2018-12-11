import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists, removePlaylists, deletePlaylist} from '../actions/playlist_actions';
import {createPlaylistSong, deletePlaylistSong} from '../actions/song_actions';
import DropDown from './dropdown.jsx';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  return {
    buttonPressed: state.ui.dropdownPressed,
    currentUserId: state.session.currentUserId,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId,
    playlistAction: "Delete",
    currentPlaylistId: ownProps.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId)),
    deletePlaylistSong: (id) => dispatch(deletePlaylistSong(id)),
    removePlaylists: () => dispatch(removePlaylists()),
    deletePlaylist: id => dispatch(deletePlaylist(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DropDown));
