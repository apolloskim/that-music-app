import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';
import {
  createPlaylistSong,
  receiveClickedSongId,
  fetchCurrentSong,
  receiveSongQueue,
  createLikeSong,
  receivePlay } from '../actions/song_actions';
import {closeModal} from '../actions/modal_actions';
import { Link } from 'react-router-dom';


class Modal extends React.Component {

  handleCloseClick(e) {
    e.stopPropagation();
    // this.setState({actionPlaylist: false});
    this.props.closeModal();
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId.id);
      this.props.closeModal();
    };
  }

  render() {
    let renderCurrentPlaylist;
    let renderCurrentPlaylists;
    if (this.props.currentPlaylists) {
      renderCurrentPlaylists = (
        Object.values(this.props.currentPlaylists).map( ( playlist, idx ) => {
          if (playlist.playlistSongIds.length === 0) {
            renderCurrentPlaylist = (
              <div className="cover-art-with-auto-height cover-art cover-art-size cover-size-fixed">
                <div className="icon">
                  <svg width="80" height="81" className="svg-cover-art" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
              </div>
            );
          } else if (playlist.imageUrl){
            renderCurrentPlaylist = (
              <img src={playlist.imageUrl} />
            );
          } else {
            renderCurrentPlaylist = (
              <img src={playlist.firstImage} />
            );
          }

          return (
            <div onClick={this.handlePlaylistClick(playlist)} key={idx} className="dropdown-playlist">
              <div key={idx} className="browse-featured-playlist">
                {renderCurrentPlaylist}
                <div className="mo-info" >
                  <Link to={`/app/playlist/${playlist.id}`} className="cover-art-text">{playlist.title}</Link>
                </div>
              </div>
            </div>
          );
        }
      ));
    };

    let playlistForm;
    playlistForm = (
      <div className="playlist-form-modal">
        <div className="playlist-form-container">
          <button className="playlist-form-close-button" onClick={this.handleCloseClick.bind(this)}>
            <img src={window.closeIcon}/>
          </button>
          <h1 className="playlist-form-header">{this.props.playlistAction}</h1>
          <div className="dropdown-playlists-container">
            {renderCurrentPlaylists}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {this.props.modal ? playlistForm : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clickedSongId: state.clickedSongId,
    currentPlaylists: state.currentPlaylists,
    currentUserId: state.session.currentUserId,
    modal: state.ui.modal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    createPlaylistSong: (playlist_id, song_id) => dispatch(createPlaylistSong(playlist_id, song_id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
