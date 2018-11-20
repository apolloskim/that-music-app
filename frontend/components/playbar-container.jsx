import React from 'react';
import {connect} from 'react-redux';
import Playbar from './playbar';
import {receiveCurrentSong, receivePlay} from '../actions/song_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    currentSong: state.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
