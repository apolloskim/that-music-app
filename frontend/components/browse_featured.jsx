import React from 'react';
import BrowseNavHeader from './browse_nav_header';
import NewReleasesContainer from './new_releases_container';
import {Link} from 'react-router-dom';
import AlbumIndexContainer from './album_index_container';
import ArtistIndexContainer from './artist/artist_index_container';
import PlaylistIndexContainer from './playlist_index_container';
import RecentlyPlayedIndexContainer from './recently_played_index';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="browse-newreleases-container">
        <section className="new-releases-content-spacing">
          <BrowseNavHeader />
          <PlaylistIndexContainer />
          <AlbumIndexContainer />
          <ArtistIndexContainer/>
          <RecentlyPlayedIndexContainer/>
        </section>
      </div>
    );
  }
}

export default BrowsePlaylists;
