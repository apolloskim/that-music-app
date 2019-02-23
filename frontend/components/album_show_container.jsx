import React from 'react';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {fetchAlbum, createLikeAlbum, deleteLikeAlbum} from '../actions/album_actions';
import {
  fetchCurrentSong, 
  receivePlay, 
  receiveSongQueue, 
  receiveClickedSongId, 
  receiveCurrentSongLikeStatus
} from '../actions/song_actions';
import {receiveDropdownControl} from '../actions/dropdown_actions';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';
import { receiveCurrentPlayingPage, createCurrentlyVisited } from '../actions/session_actions';
import {createPlaylistSong, createLikeSong} from '../actions/song_actions';

const mapStateToProps = (state, {match}) => {
  const albumId = match.params.albumId;
  return {
    songs: state.entities.songs,
    album: state.entities.albums[albumId],
    albumId,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.currentSong,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueue: state.songQueue,
    dropdownPressed: state.ui.dropdownPressed,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId,
    currentPlayingPage: state.currentPlayingPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSongLikeStatus: likeStatus => dispatch(receiveCurrentSongLikeStatus(likeStatus)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveDropdownControl: pressed => dispatch(receiveDropdownControl(pressed)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id)),
    createLikeAlbum: (user_id, album_id) => dispatch(createLikeAlbum(user_id, album_id)),
    deleteLikeAlbum: id => dispatch(deleteLikeAlbum(id)),
    createPlaylistSong: (playlist_id, song_id) => dispatch(createPlaylistSong(playlist_id, song_id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    receiveCurrentPlayingPage: (id, type, title) => dispatch(receiveCurrentPlayingPage(id, type, title)),
    createCurrentlyVisited: (user_id, table_id, table, title, imageUrl, thumbImage, coverImage) => dispatch(createCurrentlyVisited(user_id, table_id, table, title, imageUrl, thumbImage, coverImage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
