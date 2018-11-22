import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = state => {
  return {
    albums: state.entities.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
