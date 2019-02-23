import React from 'react';
import {connect} from 'react-redux';
import Playbar from './playbar';
import { receiveCurrentSong, 
  receivePlay, 
  fetchCurrentSong, 
  receiveShuffle, 
  receiveRepeat, 
  receiveSongQueue, 
  receiveShuffleSongQueue, 
  receiveSongQueueClick, 
  createLikeSong,
  deleteLikeSong, 
  fetchLikeSongs,
  receiveCurrentSongLikeStatus } from '../actions/song_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps)=> {
  return {
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueueClicked: state.playStatus.songQueueClicked,
    currentSong: state.currentSong,
    currentUserId: state.session.currentUserId,
    songQueue: state.songQueue,
    shuffleSongQueue: state.shuffleSongQueue,
    shuffle: state.playStatus.shuffle,
    repeat: state.playStatus.repeat,
    currentUser: state.entities.users[state.session.currentUserId],
    currentSongLikeStatus: state.currentSong.likeStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveShuffle: (shuffle) => dispatch(receiveShuffle(shuffle)),
    receiveRepeat: (repeat) => dispatch(receiveRepeat(repeat)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveShuffleSongQueue: songQueue => dispatch(receiveShuffleSongQueue(songQueue)),
    receiveSongQueueClick: clicked => dispatch(receiveSongQueueClick(clicked)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    deleteLikeSong: id => dispatch(deleteLikeSong(id)),
    fetchLikeSongs: id => dispatch(fetchLikeSongs(id)),
    receiveCurrentSongLikeStatus: likeStatus => dispatch(receiveCurrentSongLikeStatus(likeStatus))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Playbar));
