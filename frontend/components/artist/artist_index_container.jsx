import React from 'react';
import {connect} from 'react-redux';
import {fetchArtists, removeArtists} from '../../actions/artist_actions';
import ArtistIndex from './artist_index';

const mapStateToProps = state => {
  return {
    artists: state.entities.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    removeArtists: () => dispatch(removeArtists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
