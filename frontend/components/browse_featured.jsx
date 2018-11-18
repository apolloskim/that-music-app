import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import NewReleasesContainer from './new_releases_container';
import Playbar from './playbar';
import {Link} from 'react-router-dom';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="browse-featured-container">
        <Navbar />
        <BrowseNavHeader />
        <NewReleasesContainer />
        <Playbar />
      </div>
    );
  }
}

export default BrowsePlaylists;
