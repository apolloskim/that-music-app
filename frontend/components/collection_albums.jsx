import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';

export default class CollectionAlbums extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-albums-container">
        <Navbar />
        <CollectionPlaylistsHeader />
        <PlaybarContainer/>
      </div>
    );
  }
}
