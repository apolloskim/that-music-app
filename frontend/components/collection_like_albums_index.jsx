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
    } else {
      renderAlbums = (
        <section className="empty-state-message container-fluid empty">
          <div className="row">
            <div className="empty-state-message-margin">
              <div className="empty-state-icon-wrapper">
                <svg className="empty-state-icon" width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Album</title><path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fillRule="evenodd"></path></svg>
              </div>
              <h1 className="empty-state-title">Save your favorite albums</h1>
              <h4 className="empty-state-subtitle">Save albums you love to build the collection of your dreams.</h4>
              <Link className="white-button" to="/app/browse/newreleases">DISCOVER</Link>
            </div>
          </div>
        </section>
      );
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
