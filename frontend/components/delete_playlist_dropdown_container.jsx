import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists, removePlaylists} from '../actions/playlist_actions';
import {createPlaylistSong, deletePlaylistSong} from '../actions/song_actions';
import DropDown from './dropdown.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    buttonPressed: state.ui.dropdownPressed,
    currentUserId: state.session.currentUserId,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId,
    playlistAction: "Remove from this Playlist"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId)),
    deletePlaylistSong: (id) => dispatch(deletePlaylistSong(id)),
    removePlaylists: () => dispatch(removePlaylists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
