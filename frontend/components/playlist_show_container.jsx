import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import {fetchPlaylist, deletePlaylist} from '../actions/playlist_actions';
import {
  fetchCurrentSong,
  receivePlay,
  receiveSongQueue,
  receiveClickedSongId,
  deletePlaylistSong,
  createLikeSong
} from '../actions/song_actions';
import {fetchCurrentPlaylists, removePlaylists} from '../actions/playlist_actions';
import {receiveDropdownControl} from '../actions/dropdown_actions';
import {receiveCurrentPlayingPage, createCurrentlyVisited} from '../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, {match}) => {
  const playlistId = match.params.playlistId;
  return {
    songs: state.entities.songs,
    playlist: state.entities.playlists[playlistId],
    playlistId,
    currentUserId: state.session.currentUserId,
    currentSong: state.currentSong,
    songQueue: state.songQueue,
    clickedSongId: state.clickedSongId,
    currentPlaylists: state.currentPlaylists,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    currentPlayingPage: state.currentPlayingPage,
    currentUser: state.entities.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveDropdownControl: pressed => dispatch(receiveDropdownControl(pressed)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveClickedSongId: (id, playlistSongId) => dispatch(receiveClickedSongId(id, playlistSongId)),
    removePlaylists: () => dispatch(removePlaylists()),
    deletePlaylistSong: (id) => dispatch(deletePlaylistSong(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    receiveCurrentPlayingPage: (id, type, title) => dispatch(receiveCurrentPlayingPage(id, type, title)),
    createCurrentlyVisited: (user_id, table_id, table, title, imageUrl, thumbImage, coverImage) => dispatch(createCurrentlyVisited(user_id, table_id, table, title, imageUrl, thumbImage, coverImage))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShow));
