import React from 'react';
import BrowseNavHeader from './browse_nav_header';
import NewReleasesContainer from './new_releases_container';
import {Link} from 'react-router-dom';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="browse-newreleases-container">
        <section className="new-releases-content-spacing">
          <BrowseNavHeader />
        </section>
      </div>
    );
  }
}

export default BrowsePlaylists;
