import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';

export default class CollectionArtists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-artists-container">
        <Navbar />
        <CollectionPlaylistsHeader />
        <PlaybarContainer/>
      </div>
    );
  }
}
