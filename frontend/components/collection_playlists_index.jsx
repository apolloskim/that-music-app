import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';
import {connect} from 'react-redux';


class CollectionPlaylistsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
      <div className="browse-featured-content-container">
        <section className="browse-featured-content-spacing">
          <div className="browse-featured-content-wrapper">
            <div className="browse-featured-playlist-lists">
              {renderPlaylists}
            </div>
          </div>
        </section>
      </div>

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
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPlaylistsIndex);
