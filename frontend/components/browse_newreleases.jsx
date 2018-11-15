import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';

class BrowseNewReleases extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-newreleases-container">
        <Navbar />
        <BrowseNavHeader />
      </div>
    );
  }
}

export default BrowseNewReleases;
