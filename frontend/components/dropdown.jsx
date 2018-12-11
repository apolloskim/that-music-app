import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';
import {Link} from 'react-router-dom';
import {createPlaylistSong} from '../actions/song_actions';
import {Route, Redirect, withRouter} from 'react-router-dom';


export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actionPlaylist: false,

    };
    this.handlePlaylistClick = this.handlePlaylistClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClickSave = this.handleMenuClickSave.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleMenuClick(e) {
    e.stopPropagation();

    this.setState({actionPlaylist: this.props.playlistAction});
    if(this.state.actionPlaylist === 'Remove from this Playlist') {

      this.props.removePlaylists();
      this.props.deletePlaylistSong(this.props.clickedSongId.playlistSongId);
    } else if (this.state.actionPlaylist === 'Delete') {
      this.props.deletePlaylist(this.props.currentPlaylistId).then( () => {
        this.setState({actionPlaylist: false});
        this.props.history.push('/app/collection/playlists');
      });
    }
  }

  handleMenuClickSave(e) {
    e.stopPropagation();

    this.setState({actionPlaylist: this.props.playlistAction2});

  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({actionPlaylist: false});
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId.id);
      that.setState({actionPlaylist: false});
    };
  }

  componentDidUpdate() {
    if(this.state.actionPlaylist === 'Save to your Favorite Songs') {

      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
    }
  }



  render() {
    let dropdown = "";
    if (this.props.buttonPressed) {
      dropdown = (
        <nav role="menu" tabIndex="-1" className="dropdown-menu">
          <div onClick={this.handleMenuClick} role="menuitem" tabIndex="-1" aria-disabled="false" className="dropdown-menu-item">{this.props.playlistAction}</div>
          <div onClick={this.handleMenuClickSave} role="menuitem" tabIndex="-1" aria-disabled="false" className="dropdown-menu-item">{this.props.playlistAction2}</div>
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
                <Link to={`/app/playlist/${playlist.id}`} className="cover-art-text">{playlist.title}</Link>
              </div>
            </div>
          );
        }
      ));
    };

    let playlistForm;
    if(this.state.actionPlaylist === "Add to Playlist") {

      playlistForm = (
        <div className="playlist-form-modal">
          <div className="playlist-form-container">
            <button className="playlist-form-close-button" onClick={this.handleCloseClick}>
              <img src={window.closeIcon}/>
            </button>
            <h1 className="playlist-form-header">{this.props.playlistAction}</h1>
            <div className="dropdown-playlists-container">
              {renderPlaylists}
            </div>
          </div>
        </div>
      );
    }

    if(this.state.actionPlaylist === "Delete") {
      playlistForm = (
        <div className="playlist-form-modal">
          <div className="playlist-form-container">
            <button className="playlist-form-close-button" onClick={this.handleCloseClick}>
              <img src={window.closeIcon}/>
            </button>
            <h1 className="playlist-form-header">Do you really want to delete this playlist?</h1>
            <div className="input-box-button">
              <div className="input-box-button-item">
                <button className="input-box-button-black input-btn" onClick={this.handleCloseClick}>CANCEL</button>
              </div>
              <div className="input-box-button-item">
                <button className="input-box-button-green input-btn" onClick={this.handleMenuClick}>DELETE</button>
              </div>
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
