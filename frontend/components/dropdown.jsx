import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';
import {Link} from 'react-router-dom';
import {createPlaylistSong} from '../actions/song_actions';

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addToPlaylist: false
    };
    this.handlePlaylistClick = this.handlePlaylistClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleMenuClick(e) {
    e.stopPropagation();
    this.setState({addToPlaylist: true});
  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({addToPlaylist: false});
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId)
      that.setState({addToPlaylist: false});
    };
  }

  componentDidMount() {
  }

  render() {
    let dropdown = "";
    if (this.props.buttonPressed) {
      dropdown = (
        <nav role="menu" tabIndex="-1" className="dropdown-menu">
          <div onClick={this.handleMenuClick} role="menuitem" tabIndex="-1" aria-disabled="false" className="dropdown-menu-item">Add to Playlist</div>
        </nav>
      );
    }

    let renderPlaylists;
    if (this.props.playlists) {
      renderPlaylists = (
        Object.values(this.props.playlists).map( ( playlist, idx ) => {
          return (
            <div key={idx} className="dropdown-playlist">
              <img onClick={this.handlePlaylistClick(playlist)} src={playlist.imageUrl} />
              <div className="mo-info" >
                <Link to={`/playlist/${playlist.id}`} className="cover-art-text">{playlist.title}</Link>
              </div>
            </div>
          );
        }
      ));
    };

    let playlistForm;
    if(this.state.addToPlaylist) {
      playlistForm = (
        <div className="playlist-form-modal">
          <div className="playlist-form-container">
            <button className="playlist-form-close-button" onClick={this.handleCloseClick}>
              <img src={window.closeIcon}/>
            </button>
            <h1 className="playlist-form-header">Add new playlist</h1>
            <div className="dropdown-playlists-container">
              {renderPlaylists}
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        {dropdown}
          {playlistForm}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    buttonPressed: state.ui.dropdownPressed,
    currentUserId: state.session.currentUserId,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
