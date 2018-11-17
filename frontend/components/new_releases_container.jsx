import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlist_actions';
import NewReleases from './new_releases';

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

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);
