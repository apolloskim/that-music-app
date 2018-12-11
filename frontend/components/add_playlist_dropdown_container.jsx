import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists, removePlaylists} from '../actions/playlist_actions';
import {createPlaylistSong, deletePlaylistSong, createLikeSong} from '../actions/song_actions';
import DropDown from './dropdown';

const mapStateToProps = (state) => {
  return {
    buttonPressed: state.ui.dropdownPressed,
    currentUserId: state.session.currentUserId,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId,
    playlistAction: "Add to Playlist",
    playlistAction2: "Save to your Favorite Songs"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId)),
    deletePlaylistSong: (id) => dispatch(deletePlaylistSong(id)),
    removePlaylists: () => dispatch(removePlaylists()),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
