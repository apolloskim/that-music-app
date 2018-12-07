import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import PlaybarContainer from './playbar-container';

class BrowseGenres extends React.Component {

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

export default BrowseGenres;
