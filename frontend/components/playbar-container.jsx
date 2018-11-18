import React from 'react';
import {connect} from 'react-redux';
import Playbar from './playbar';

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentSong : song => dispatch(receiveCurrentSong(song))
  };
};


export default connect(null, mapDispatchToProps)(Playbar);
