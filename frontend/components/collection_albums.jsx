import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';
import CollectionLikeAlbumsContainer from './collection_like_albums_index.jsx';

export default class CollectionAlbums extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-newreleases-container">
        <section className="new-releases-content-spacing">
          <CollectionPlaylistsHeader />
          <CollectionLikeAlbumsContainer />
        </section>
      </div>
    );
  }

}
