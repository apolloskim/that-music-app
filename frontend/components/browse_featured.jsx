import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';

class BrowsePlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    let renderPlaylists;
    if (this.props.playlists) {
      renderPlaylists = (
        Object.values(this.props.playlists).map( ( playlist, idx ) => {
          return <li key={idx}><img src={playlist.imageUrl} /></li>;
        }
      ));
    };

    return (
      <div className="browse-featured-container">
        <Navbar />
        <BrowseNavHeader />
        <ul>
          {renderPlaylists}
        </ul>
      </div>
    );
  }
}

export default BrowsePlaylists;
