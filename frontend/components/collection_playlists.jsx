import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';

export default class CollectionPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-playlists-container">
        <Navbar />
        <CollectionPlaylistsHeader />
      </div>
    );
  }
}
