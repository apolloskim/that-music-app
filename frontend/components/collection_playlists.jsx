import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';
import CollectionPlaylistsIndexContainer from './collection_playlists_index';

export default class CollectionPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-playlists-container">
        <Navbar />
        <CollectionPlaylistsHeader />
        <CollectionPlaylistsIndexContainer />
        <PlaybarContainer/>
      </div>
    );
  }
}
