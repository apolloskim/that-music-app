import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => {
  const playlistId = match.params.playlistId;
  return {
    songs: state.entities.songs,
    playlist: state.entities.playlists[playlistId],
    playlistId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
