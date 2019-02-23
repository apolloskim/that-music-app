import React from 'react';
import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist, createLikeArtist, deleteLikeArtist, removeArtists } from '../../actions/artist_actions';
import { receiveCurrentPlayingPage, createCurrentlyVisited } from '../../actions/session_actions';
import { 
  fetchCurrentSong, 
  receivePlay, 
  receiveSongQueue, 
  receiveCurrentSongLikeStatus } from '../../actions/song_actions';

const mapStateToProps = (state, {match})=> {
  let artistId = match.params.artistId;
  return {
    songs: state.entities.songs,
    artistId,
    artist: state.entities.artists[artistId],
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    currentPlayingPage: state.currentPlayingPage,
    songQueue: state.songQueue,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    currentSong: state.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    createLikeArtist: (userId, artistId) => dispatch(createLikeArtist(userId, artistId)),
    deleteLikeArtist: id => dispatch(deleteLikeArtist(id)),
    removeArtists: () => dispatch(removeArtists()),
    receiveCurrentPlayingPage: (id, type, title) => dispatch(receiveCurrentPlayingPage(id, type, title)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    createCurrentlyVisited: (user_id, table_id, table, title, imageUrl, thumbImage, coverImage) => dispatch(createCurrentlyVisited(user_id, table_id, table, title, imageUrl, thumbImage, coverImage)),
    receiveCurrentSongLikeStatus: likeStatus => dispatch(receiveCurrentSongLikeStatus(likeStatus))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
