import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';
import {connect} from 'react-redux';
import { fetchLikeAlbums } from '../actions/album_actions';


class CollectionLikeAlbums extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLikeAlbums(this.props.currentUserId);
  }

  render() {
    let renderAlbums;
    if (Object.values(this.props.albums).length !== 0) {
      renderAlbums = (
        Object.values(this.props.albums).map( ( album, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/album/${album.id}`} className="cover-art-text">
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
        <div className="browse-featured-playlist-lists playlist-top-margin">
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

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    albums: state.entities.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLikeAlbums: id => dispatch(fetchLikeAlbums(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionLikeAlbums);
