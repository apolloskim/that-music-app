import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';

class NewReleases extends React.Component {

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
          return (
            <div key={idx} className="browse-featured-playlist">
              <img src={playlist.imageUrl} />
              <div className="mo-info" >
                <Link to={`/playlist/${playlist.id}`} className="cover-art-text">{playlist.title}</Link>
              </div>
            </div>
          );
        }
      ));
    };

    return (
      <section className="browse-featured-content-spacing">
        <div className="browse-featured-content-wrapper">
          <div className="browse-featured-header">
            <h1 className="browse-featured-header-new-releases">New releases</h1>
          </div>
          <div className="browse-featured-playlist-lists">
            {renderPlaylists}
          </div>
        </div>
      </section>
    );
  }
}

export default NewReleases;
