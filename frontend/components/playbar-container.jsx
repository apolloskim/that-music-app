import React from 'react';
import {connect} from 'react-redux';
import Playbar from './playbar';
import {receiveCurrentSong, receivePlay, fetchCurrentSong} from '../actions/song_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    currentSong: state.currentSong,
    currentUserId: state.session.currentUserId,
    songQueue: state.songQueue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
