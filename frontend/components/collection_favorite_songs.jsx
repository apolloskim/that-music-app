import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';

export default class CollectionFavoriteSongs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-favorite-songs-container">
        <Navbar />
        <CollectionPlaylistsHeader />
      </div>
    );
  }
}
