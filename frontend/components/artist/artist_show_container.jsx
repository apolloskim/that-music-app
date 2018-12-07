import React from 'react';
import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, {match})=> {
  artistId = match.params.artistId;
  return {
    artistId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
