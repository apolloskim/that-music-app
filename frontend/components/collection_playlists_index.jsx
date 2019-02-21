import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists, removeCurrentPlaylists} from '../actions/playlist_actions';


class CollectionPlaylistsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
  }

  componentWillUnmount() {
    this.props.removeCurrentPlaylists();
  }

  render() {
    let renderPlaylist;
    let renderPlaylists;
    let renderAllPlaylists;

    if (Object.values(this.props.playlists).length !== 0) {
      renderPlaylists = (
        Object.values(this.props.playlists).map( ( playlist, idx ) => {

          if (playlist.playlistSongIds.length === 0) {
            renderPlaylist = (
              <div className="cover-art-with-auto-height cover-art cover-art-size">
                <div className="icon">
                  <svg width="80" height="81" className="svg-cover-art" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
              </div>
            );
          } else if (playlist.imageUrl){
            renderPlaylist = (
              <img src={playlist.imageUrl} />
            );
          } else {
            renderPlaylist = (
              <img src={playlist.firstImage} />
            );
          }

          return (

            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/playlist/${playlist.id}`}>
                {renderPlaylist}
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/playlist/${playlist.id}`} className="cover-art-text">{playlist.title}</Link>
                  <div className="ellipsis-one-line">
                    <span>
                      {playlist.creatorName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      ));

      renderAllPlaylists = (
        <div className="browse-featured-content-wrapper">
          <div className="browse-featured-playlist-lists playlist-top-margin">
            <div className="container-fluid">
              <div className="album-index row">
                {renderPlaylists}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      renderAllPlaylists = (
        <section className="empty-state-message container-fluid empty">
          <div className="row">
            <div className="empty-state-message-margin">
              <div className="empty-state-icon-wrapper">
                <svg className="empty-state-icon" width="51" height="52" viewBox="0 0 51 52" xmlns="http://www.w3.org/2000/svg"><title>Add Playlist Icon</title><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10c0-5.524-4.477-10-10-10zm7 11h-6v6H9v-6H3V9h6V3h2v6h6v2zm7.75-3.655c.118.653.188 1.32.217 2L49 4.234v27.03c-1.65-2.044-4.174-3.356-7-3.356-4.962 0-9 4.037-9 9 0 4.962 4.038 9 9 9s9-4.038 9-9V1.764l-26.25 5.58zM42 43.91c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-25-6.556C15.348 35.31 12.826 34 10 34c-4.963 0-9 4.037-9 9 0 4.96 4.037 9 9 9s9-4.04 9-9V21.97c-.632.476-1.296.912-2 1.285v14.097zM10 50c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.858-3.14 7-7 7z" fill="currentColor" fillRule="evenodd"></path></svg>              
              </div>  
              <h1 className="empty-state-title">Create your first playlist</h1>
              <h4 className="empty-state-subtitle">We’ll help you make the perfect mixtape, minus the tape.</h4>
              <Link className="white-button" to="/app/browse/newreleases">CREATE NEW PLAYLIST</Link>
            </div>
          </div>
        </section>
      );
    };

    return (
      <ul>
        {renderAllPlaylists}
      </ul>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    playlists: state.currentPlaylists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    removeCurrentPlaylists: () => dispatch(removeCurrentPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPlaylistsIndex);
