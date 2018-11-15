import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';

export default class CollectionArtists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-artists-container">
        <Navbar />
        <CollectionPlaylistsHeader />
      </div>
    );
  }
}
