import React from 'react';
import Navbar from './navbar/navbar';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-featured-container">
        <Navbar />
      </div>
    );
  }
}

export default BrowsePlaylists;
