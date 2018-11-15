import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-featured-container">
        <Navbar />
        <BrowseNavHeader />
      </div>
    );
  }
}

export default BrowsePlaylists;
