import React from 'react';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {fetchAlbum} from '../actions/album_actions';
import {fetchCurrentSong, receivePlay} from '../actions/song_actions';

const mapStateToProps = (state, {match}) => {
  // debugger
  const albumId = match.params.albumId;
  return {
    songs: state.entities.songs,
    album: state.entities.albums[albumId],
    albumId,
    currentUserId: state.session.currentUserId,
    currentSong: state.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
