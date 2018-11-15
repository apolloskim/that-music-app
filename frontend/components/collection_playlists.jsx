import React from 'react';
import Navbar from './navbar/navbar';

export default class CollectionPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-playlists-container">
        <Navbar />
      </div>
    );
  }
}
