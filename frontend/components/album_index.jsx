import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';

class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    let renderAlbums;
    if (this.props.albums) {
      renderAlbums = (
        Object.values(this.props.albums).map( ( album, idx ) => {
          return (
            <div key={idx} className="browse-featured-playlist">
              <img src={album.imageUrl} />
              <div className="mo-info" >
                <Link to={`/album/${album.id}`} className="cover-art-text">{album.title}</Link>
              </div>
            </div>
          );
        }
      ));
    };

    return (
      <section className="new-releases-content-spacing">
        <div className="browse-featured-content-wrapper">
          <div className="browse-featured-header">
            <h1 className="browse-featured-header-new-releases">New releases</h1>
          </div>
          <div className="browse-featured-playlist-lists">
            {renderAlbums}
          </div>
        </div>
      </section>
    );
  }
}

export default AlbumIndex;
