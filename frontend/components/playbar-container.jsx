import React from 'react';
import {connect} from 'react-redux';
import Playbar from './playbar';
import {receiveCurrentSong} from '../actions/song_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    playing: ownProps.playing,
    currentSong: state.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSong : song => dispatch(receiveCurrentSong(song))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
