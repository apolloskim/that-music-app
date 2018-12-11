import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import {fetchPlaylist} from '../actions/playlist_actions';
import {fetchCurrentSong, receivePlay, receiveSongQueue, receiveClickedSongId} from '../actions/song_actions';
import {fetchCurrentPlaylists, removePlaylists} from '../actions/playlist_actions';
import {receiveDropdownControl} from '../actions/dropdown_actions';

const mapStateToProps = (state, {match}) => {
  const playlistId = match.params.playlistId;
  return {
    songs: state.entities.songs,
    playlist: state.entities.playlists[playlistId],
    playlistId,
    currentUserId: state.session.currentUserId,
    currentSong: state.currentSong,
    songQueue: state.songQueue
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
    removePlaylists: () => dispatch(removePlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
