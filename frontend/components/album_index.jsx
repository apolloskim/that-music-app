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
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/album/${album.id}`}>
                  <img src={album.imageUrl} />
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/album/${album.id}`} className="cover-art-text">{album.title}</Link>
                  <div className="ellipsis-one-line">
                    <span>
                      {album.artistName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      ));
    };

    return (

        <div className="browse-featured-content-wrapper">
          <div className="browse-featured-header">
            <h1 className="browse-featured-header-new-releases">New albums & singles</h1>
          </div>
          <div className="browse-featured-playlist-lists">
            <div className="container-fluid">
              <div className="album-index row">
                {renderAlbums}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AlbumIndex;
