import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import NewReleasesContainer from './new_releases_container';
import PlaybarContainer from './playbar-container';
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
        <PlaybarContainer/>
      </div>
    );
  }
}

export default BrowsePlaylists;
