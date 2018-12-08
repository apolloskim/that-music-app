import React from 'react';
import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, {match})=> {
  let artistId = match.params.artistId;
  return {
    artistId,
    artist: state.entities.artists[artistId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
