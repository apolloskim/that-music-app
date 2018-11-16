import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlist_actions';
import BrowsePlaylists from './browse_featured';

const mapStateToProps = state => {
  return {
    playlists: state.entities.playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePlaylists);
