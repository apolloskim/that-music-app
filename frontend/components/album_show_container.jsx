import React from 'react';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {fetchAlbum} from '../actions/album_actions';
import {fetchCurrentSong, receivePlay, receiveSongQueue, receiveClickedSongId} from '../actions/song_actions';
import {receiveDropdownControl} from '../actions/dropdown_actions';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';

const mapStateToProps = (state, {match}) => {
  const albumId = match.params.albumId;
  return {
    songs: state.entities.songs,
    album: state.entities.albums[albumId],
    albumId,
    currentUserId: state.session.currentUserId,
    currentSong: state.currentSong,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueue: state.songQueue,
    dropdownPressed: state.ui.dropdownPressed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveDropdownControl: pressed => dispatch(receiveDropdownControl(pressed)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
