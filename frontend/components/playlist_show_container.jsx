import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import {fetchPlaylist} from '../actions/playlist_actions';
import {fetchCurrentSong, receivePlay} from '../actions/song_actions';

const mapStateToProps = (state, {match}) => {
  const playlistId = match.params.playlistId;
  // debugger
  return {
    songs: state.entities.songs,
    playlist: state.entities.playlists[playlistId],
    playlistId,
    currentUserId: state.session.currentUserId,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
