import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import PlaybarContainer from './playbar-container';
import AddPlaylistDropDownContainer from './add_playlist_dropdown_container';
import MediaQuery from 'react-responsive';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';


export default class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong.song,
      included: this.props.currentUser.likeAlbumIds.includes(parseInt(this.props.albumId)),
      actionPlaylist: false,
      prevId: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
    this.handleContextMenuClick = this.handleContextMenuClick.bind(this);
    this.handlePlaylistClick = this.handlePlaylistClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.playlistForm;
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
    this.setState({prevId: this.props.albumId});
  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({actionPlaylist: false});
  }

  handleMouseEnter(idx) {
    return () => {
      this.setState({mouseOver: true, idxMouseOver: idx});
    }
  }

  handleMouseLeave() {
    this.setState({mouseOver: false, idxMouseOver: null});
  }

  toggleMenu(id, playlistSongId) {
    let that = this;
    return e => {
      e.stopPropagation();
      if(that.toggle) {
        that.toggle.handleContextClick(e);
        that.props.receiveClickedSongId(id, playlistSongId);
      }
    }
  }

  toggleAlbumMenu(e) {
      e.stopPropagation();
      if(this.toggle) {
        this.toggle.handleContextClick(e);
      }
  }

  handleHeartClick() {
    if (this.state.included) {
      let likeAlbumId = this.props.currentUser.likeAlbums.filter(album => album.album_id === parseInt(this.props.albumId))[0].id;
      this.props.deleteLikeAlbum(likeAlbumId).then( () => this.setState({included: !this.state.included}));
    } else {
      this.props.createLikeAlbum(this.props.currentUserId, this.props.albumId).then( () => this.setState({included: !this.state.included}));
    }
  }

  handleClick(song) {
    return (e) => {
      this.handlePlay(song);
    };
  }

  handlePlay(song) {
    if (this.props.playing) {
      this.props.receivePlay(false, true);
    }

    if (!this.props.currentSong.song || song.id !== this.props.currentSong.song.id) {
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.albumId, 'album', this.props.album.title, null, null, this.props.album.imageUrl);
    } else if (this.props.currentPlayingPage.length === 0){
      this.props.receivePlay(true, false);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.albumId, 'album', this.props.album.title, null, null, this.props.album.imageUrl);
    } else {
      this.props.receivePlay(true, false);
    }
}



  handleButtonClick() {
    let currentPlayingTable;
    let currentPlayingId;

    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }

    if (currentPlayingTable && currentPlayingTable === 'album' && currentPlayingId && currentPlayingId.toString() === this.props.albumId) {
      this.handlePlay(this.props.currentSong.song);
    } else {
      this.handlePlay(Object.values(this.props.songs)[0]);
    }
  }

  componentDidUpdate() {
    if (this.props.albumId !== this.state.prevId) {
      this.props.fetchAlbum(this.props.albumId);
      this.setState({prevId: this.props.albumId});
    }

    if(this.state.actionPlaylist === 'Save to your Favorite Songs') {
      this.setState({actionPlaylist: false});
      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
    } else if (this.state.actionPlaylist === 'Save to Your Library') {
      this.setState({actionPlaylist: false});
      this.props.createLikeAlbum(this.props.currentUserId, this.props.albumId).then( () => this.setState({included: true, actionPlaylist: false}));
    } else if (this.state.actionPlaylist === "Remove from Your Library") {
      let likeAlbumId = this.props.currentUser.likeAlbums.filter(album => album.album_id === parseInt(this.props.albumId))[0].id
      this.props.deleteLikeAlbum(likeAlbumId).then( () => this.setState({included: !this.state.included, actionPlaylist: false}));
    }

  }

  handleContextMenuClick(e, data) {
    this.setState({actionPlaylist: data.foo});
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId.id);
      that.setState({actionPlaylist: false});
    };
  }


  render() {
    let currentPlayingTable;
    let currentPlayingId;
    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }
    let renderPlaylist;
    let renderPlaylists;
    if (this.props.playlists) {
      renderPlaylists = (
        Object.values(this.props.playlists).map( ( playlist, idx ) => {

          if (playlist.playlistSongIds.length === 0) {
            renderPlaylist = (
              <div className="cover-art-with-auto-height cover-art cover-art-size cover-size-fixed">
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
            <div onClick={this.handlePlaylistClick(playlist)} key={idx} className="dropdown-playlist">
              {renderPlaylist}
              <div className="mo-info" >
                <span className="cover-art-text">{playlist.title}</span>
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
            <button className="playlist-form-close-button" onClick={this.handleCloseClick.bind(this)}>
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



    const renderNote = (
      <div className="music-note-icon-padding">
        <div className="music-note-icon-center">
          <div className="music-note-icon-margin">
            <img className="music-note-icon" src={window.musicNoteIcon} />
          </div>
        </div>
      </div>
    );

    const renderNoteNeon = (
      <div className="music-note-icon-padding">
        <div className="music-note-icon-center">
          <div className="music-note-icon-margin">
            <img className="music-note-icon" src={window.maxVolumeNeonIcon} />
          </div>
        </div>
      </div>
    );

    let renderMore;
    let renderPlay;
    let renderPlayNeon;

    if(this.state.mouseOver) {
      renderMore = (id, playlistSongId) => {

        return(
          <div className="track-list-more">
            <div className="track-list-more-margin-top">
              <ContextMenuTrigger id="two" ref={c => this.toggle = c}>
                <button className="track-list-more-button" onClick={this.toggleMenu(id, playlistSongId)}>
                  <img className="track-list-row-body-dots-icon" src={window.threeDotsIcon}/>
                </button>
              </ContextMenuTrigger>
            </div>
          </div>
        );
      }


      renderPlay = (
        <div className="music-note-icon-padding">
          <div className="music-note-icon-center">
            <div className="music-note-icon-margin">
              <img className="music-note-icon" src={window.musicPlayIcon} />
            </div>
          </div>
        </div>
      );

      renderPlayNeon = (
        <div className="music-note-icon-padding">
          <div className="music-note-icon-center">
            <div className="music-note-icon-margin">
              <img className="music-note-icon" src={window.musicPlayNeonIcon} />
            </div>
          </div>
        </div>
      );
    }


    let renderSongs;
    if (this.props.songs) {
      renderSongs = Object.values(this.props.songs).map( (song, idx) => {

        let explicit;
        if (song.explicit) {
          explicit = (
            <div className="track-list-name-second-line">
              <span className="explicit-label">explicit</span>
            </div>
          );
        }
        return (
          <li key={idx}
            ref={songRow => this.songRow = songRow}
            className="track-list-row"
            onDoubleClick={this.handleClick(song)}
            onMouseEnter={this.handleMouseEnter(idx)}
            onMouseLeave={this.handleMouseLeave.bind(this)}>

            {
              Object.values(this.props.currentSong).length !== 0
              ? (this.state.idxMouseOver === idx
                ? (song.id === this.props.currentSong.song.id
                  ? renderPlayNeon : renderPlay)
                  : (song.id === this.props.currentSong.song.id
                    ? renderNoteNeon
                    : renderNote))
              : (this.state.idxMouseOver === idx ? renderPlay : renderNote)
            }

            <div className="track-list-column">
              <div className="track-list-column-margin">
                <div className=
                  {
                    Object.values(this.props.currentSong).length !== 0
                    ? (song.id === this.props.currentSong.song.id
                      ? "track-list-name-neon"
                      : "track-list-name")
                    : "track-list-name"
                  }>{song.title}</div>
                  {explicit}
              </div>
            </div>
            {this.state.idxMouseOver === idx ? renderMore(song.id, song.playlistSongId) : ""}
            <div className="track-list-duration">
              <div className=
                {
                  Object.values(this.props.currentSong).length !== 0
                  ? (song.id === this.props.currentSong.song.id
                    ? "track-list-duration-margin-top-neon"
                    : "track-list-duration-margin-top")
                  : "track-list-duration-margin-top"
                }>
                <span>{song.duration}</span>
              </div>
            </div>

          </li>
        );
      });
    }
    return (
          <div className="playlist-show-main-content" >
            {playlistForm}
            <div>
              <div className="playlist-content-spacing" >
                <section className="content-playlist">
                  <div className="container-fluid">
                    <div className="album-index">
                        <div className="track-list-header" >
                          <div className="track-list-header-wrapper">

                            <MediaQuery minDeviceWidth={1201}>
                              <div className="track-list-img-title">
                                <div className="wrapper">
                                  <img className="playlist-cover-img" src={this.props.album ? this.props.album.imageUrl : ""} />
                                </div>
                                <div className="playlist-title-wrapper">
                                  <div className="album-title">
                                    <span>{this.props.album ? this.props.album.title : ""}</span>
                                  </div>
                                </div>
                                <div className="spotify-small-text">
                                  <span dir="auto">
                                    <Link to={`/app/artist/${this.props.album ? this.props.album.artistId : ""}/overview`}>{this.props.album ? this.props.album.artistName : ""}</Link>
                                  </span>
                                </div>
                              </div>

                              <MediaQuery maxWidth={1200}>
                                <div className="wrapper">
                                  <img className="playlist-cover-img" src={this.props.album ? this.props.album.imageUrl : ""} />
                                </div>
                                <div className="album-info-smaller">
                                  <div className="album-title-author-smaller">
                                    <div className="album-title-smaller">
                                      <span>{this.props.album ? this.props.album.title : ""}</span>
                                    </div>
                                    <div>
                                      <span dir="auto" className="album-by">By</span>
                                      <span dir="auto">
                                        <Link to={`/app/artist/${this.props.album ? this.props.album.artistId : ""}`}>{this.props.album ? this.props.album.artistName : ""}</Link>
                                      </span>
                                    </div>
                                  </div>
                                  <p className="album-year-count-smaller">
                                    {
                                      `${this.props.album ? this.props.album.year : ""} • ${this.props.album ? this.props.album.songCount : ""} songs`
                                    }
                                  </p>
                                  <div className="track-list-buttons-smaller">
                                    <div className="track-list-header-play-button-top-smaller">
                                      <button onClick={this.handleButtonClick} className="track-list-header-play-button">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'album' && currentPlayingId.toString() === this.props.albumId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                                    </div>
                                    <div className="track-list-extra-buttons-smaller">
                                      <button className="track-list-header-body-heart-buttons-body" onClick={this.handleHeartClick}>
                                        <img className="track-list-header-body-heart-icon" src={this.state.included ? window.heartFilledIcon : window.heartIcon}/>
                                      </button>
                                      <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
                                        <button className="track-list-header-body-three-dots-buttons-body" onClick={this.toggleAlbumMenu.bind(this)}>
                                          <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                        </button>
                                      </ContextMenuTrigger>
                                    </div>
                                  </div>
                                </div>
                              </MediaQuery>
                            </MediaQuery>

                            <MediaQuery maxDeviceWidth={1200}>
                              <div className="wrapper">
                                <img className="playlist-cover-img" src={this.props.album ? this.props.album.imageUrl : ""} />
                              </div>
                              <div className="album-info-smaller">
                                <div className="album-title-author-smaller">
                                  <div className="album-title-smaller">
                                    <span>{this.props.album ? this.props.album.title : ""}</span>
                                  </div>
                                  <div>
                                    <span dir="auto" className="album-by">By</span>
                                    <span dir="auto">
                                      <Link to={`/app/artist/${this.props.album ? this.props.album.artistId : ""}`}>{this.props.album ? this.props.album.artistName : ""}</Link>
                                    </span>
                                  </div>
                                </div>
                                <p className="album-year-count-smaller">
                                  {
                                    `${this.props.album ? this.props.album.year : ""} • ${this.props.album ? this.props.album.songCount : ""} songs`
                                  }
                                </p>
                                <div className="track-list-buttons-smaller">
                                  <div className="track-list-header-play-button-top-smaller">
                                    <button onClick={this.handleButtonClick} className="track-list-header-play-button">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'album' && currentPlayingId.toString() === this.props.albumId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                                  </div>
                                  <div className="track-list-extra-buttons-smaller">
                                    <button className="track-list-header-body-heart-buttons-body" onClick={this.handleHeartClick}>
                                      <img className="track-list-header-body-heart-icon" src={this.state.included ? window.heartFilledIcon : window.heartIcon}/>
                                    </button>
                                    <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
                                      <button className="track-list-header-body-three-dots-buttons-body" onClick={this.toggleAlbumMenu.bind(this)}>
                                        <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                      </button>
                                    </ContextMenuTrigger>

                                  </div>
                                </div>
                              </div>
                            </MediaQuery>

                            <div className="track-list-header-play-button-top">
                              <button onClick={this.handleButtonClick} className="track-list-header-play-button">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'album' && currentPlayingId.toString() === this.props.albumId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                            </div>
                            <div className="track-list-header-body">
                              <p className="track-list-count">{`${this.props.album ? this.props.album.year : ""} • ${this.props.album ? this.props.album.songCount : ""} songs`}</p>
                              <div className="track-list-header-body-children">
                                <div className="track-list-header-body-extra-buttons">
                                  <button className="track-list-header-body-heart-buttons-body" onClick={this.handleHeartClick}>
                                    <img className="track-list-header-body-heart-icon" src={this.state.included ? window.heartFilledIcon : window.heartIcon}/>
                                  </button>
                                  <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
                                    <button className="track-list-header-body-three-dots-buttons-body" onClick={this.toggleAlbumMenu.bind(this)}>
                                      <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                    </button>
                                  </ContextMenuTrigger>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="playlist-song-lists">
                          <section className="track-list-container">
                            <ol className="track-list">
                              {renderSongs}
                            </ol>
                          </section>
                          <div className="copyrights">
                            <p>
                              <span>{this.props.album ? this.props.album.publisher : ""}</span>
                            </p>
                          </div>
                        </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
            <ContextMenu id="two">
              <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleContextMenuClick}>
                Add to Playlist
              </MenuItem>
              <MenuItem data={{foo: 'Save to your Favorite Songs'}} onClick={this.handleContextMenuClick}>
                Save to your Favorite Songs
              </MenuItem>
            </ContextMenu>

            <ContextMenu id="three">
              <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleContextMenuClick}>
                Add to Playlist
              </MenuItem>
              <MenuItem data={{foo: this.state.included ? "Remove from Your Library" : "Save to Your Library"}} onClick={this.handleContextMenuClick}>
                {this.state.included ? "Remove from Your Library" : "Save to Your Library"}
              </MenuItem>
            </ContextMenu>

          </div>

    );
  }
}
