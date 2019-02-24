import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import PlaybarContainer from './playbar-container';
import MediaQuery from 'react-responsive';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';


export default class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong.song,
      actionPlaylist: false,
      prevId: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleMouseEnter(idx) {
    return () => {
      this.setState({mouseOver: true, idxMouseOver: idx});
    }
  }

  handleMouseLeave() {
    this.setState({mouseOver: false, idxMouseOver: null});
  }

  handleContextMenuClick(e, data) {

    this.setState({actionPlaylist: data.foo});
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

  handleClick(song) {
    return (e) => {
      this.handlePlay(song);
    };
  }

  handlePlay(song) {
    if (!this.props.currentSong.song || song.id !== this.props.currentSong.song.id) {
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false, song.title);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.playlistId, 'playlist', this.props.playlist.title, this.props.playlist.firstImage, null, null);
    } else if (this.props.currentPlayingPage.length === 0){
      this.props.receivePlay(true, false, song.title);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.playlistId, 'playlist', this.props.playlist.title, this.props.playlist.firstImage, null, null);
    } else {
      this.props.receivePlay(true, false, song.title);
    }
  }
  
  handleButtonPlay(song) {
    if (this.props.playing && song.id === this.props.currentSong.song.id) {
      this.props.receivePlay(false, true, song.title);
    } else if (!this.props.currentSong.song || song.id !== this.props.currentSong.song.id) {
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false, song.title);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.playlistId, 'playlist', this.props.playlist.title, this.props.playlist.firstImage, null, null);
    } else if (this.props.currentPlayingPage.length === 0){
      this.props.receivePlay(true, false, song.title);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.playlistId, 'playlist', this.props.playlist.title, this.props.playlist.firstImage, null, null);
    } else {
      this.props.receivePlay(true, false, song.title);
    }
  }



  handleButtonClick() {
    let currentPlayingTable;
    let currentPlayingId;

    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }
    if (currentPlayingTable && currentPlayingTable === 'playlist' && currentPlayingId && currentPlayingId.toString() === this.props.playlistId) {
      this.handleButtonPlay(this.props.currentSong.song);
    } else {
      this.handleButtonPlay(Object.values(this.props.songs)[0]);
    }
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
    this.setState({prevId: this.props.playlistId});
    
  }

  componentDidUpdate() {

    if(this.props.playlistId !== this.state.prevId) {
      this.props.fetchPlaylist(this.props.playlistId);
      this.setState({prevId: this.props.playlistId});
    }

    if(this.state.actionPlaylist === 'Remove from this Playlist') {
      this.setState({actionPlaylist: false});
      this.props.deletePlaylistSong(this.props.clickedSongId.playlistSongId);
    } else if (this.state.actionPlaylist === 'Delete') {
      this.setState({actionPlaylist: false});
      this.props.deletePlaylist(this.props.playlistId).then( () => {
        this.props.history.push('/app/collection/playlists');
      });
    } else if (this.state.actionPlaylist === 'Save to your Favorite Songs') {
      this.setState({actionPlaylist: false});
      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
      this.props.receiveCurrentSongLikeStatus(true);
    } 
  }


  togglePlaylistMenu(e) {
      e.stopPropagation();
      if(this.toggle) {
        this.toggle.handleContextClick(e);
      }
  }


  render() {
    let deletePlaylistMenu = "follow";
    let removePlaylistMenu = ""
    if (this.props.currentPlaylists) {

      let currentPlaylistIds = Object.values(this.props.currentPlaylists).map(playlist => playlist.id);

      if (this.props.playlist) {
        removePlaylistMenu = currentPlaylistIds.includes(this.props.playlist.id) ? "Remove from this Playlist" : "";
        deletePlaylistMenu = currentPlaylistIds.includes(this.props.playlist.id) ? "Delete" : "follow";
      }
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

    let renderCoverArt;
    let renderCoverArtSmaller;
    let renderDisabled = "";
    let renderSongRows;
    let renderSongs;

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
                  <div className="display-flex">
                    {explicit}
                    <span className="ellipsis-one-line">
                      <Link to={`/app/artist/${song.artistId}`}>{song.artist}</Link>
                    </span>
                    <span className="second-line-separator">•</span>
                    <span className="ellipsis-one-line">
                      <Link to={`/app/artist/${song.albumId}`}>{song.album}</Link>
                    </span>
                  </div>
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

    if (this.props.playlist) {
      if (!this.props.playlist.imageUrl && (this.props.playlist.playlistSongIds.length === 0)) {
        renderCoverArt = (

          <div className="default-cover-padding bigger">
            <div className="cover-art-with-auto-height cover-art cover-art-size">
              <div className="icon">
                <svg width="80" height="81" className="svg-cover-art" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="playlist-title-wrapper">
              <div className="album-title">
                <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
              </div>
            </div>
            <div className="spotify-small-text">
              <span dir="auto">
                <Link to={`/app/artist/${this.props.playlist ? this.props.playlist.artistId : ""}`}>{this.props.playlist ? this.props.playlist.artistName : ""}</Link>
              </span>
            </div>
            <div className="center-text-align playlist-author">
              <span>
                <Link className="playlist-author-link" to="/">{this.props.playlist ? this.props.playlist.creatorName : ""}</Link>
              </span>
            </div>
          </div>
        );

        renderCoverArtSmaller = (
          <div className="default-cover-padding">
            <div className="cover-art-with-auto-height cover-art cover-art-size">
              <div className="icon">
                <svg width="80" height="81" className="svg-cover-art" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        );

        renderSongRows = (
          <section className="empty-state-message container-fluid empty">
            <div className="row">
              <div className="empty-state-message-margin">
                <div className="empty-state-icon-wrapper">
                  <svg className="empty-state-icon" width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Album</title><path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
                <h1 className="empty-state-title">It's a bit empty here...</h1>
                <h4 className="empty-state-subtitle">Find more of the music you love among our New Releases</h4>
                <Link className="white-button" to="/app/browse/newreleases">BROWSE</Link>
              </div>
            </div>
          </section>
        );

        renderDisabled = "disabled";

      } else if (this.props.playlist.imageUrl) {
        renderCoverArt = (
          <div className="track-list-img-title">
            <div className="wrapper">
              <img className="playlist-cover-img" src={this.props.playlist.imageUrl} />
            </div>
            <div className="playlist-title-wrapper">
              <div className="album-title">
                <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
              </div>
            </div>
            <div className="spotify-small-text">
              <span dir="auto">
                <Link to={`/app/artist/${this.props.playlist ? this.props.playlist.artistId : ""}`}>{this.props.playlist ? this.props.playlist.artistName : ""}</Link>
              </span>
            </div>
          </div>
        );

        renderCoverArtSmaller = (
          <div className="wrapper">
            <img className="playlist-cover-img" src={this.props.playlist.imageUrl} />
          </div>
        );

        renderSongRows = (
          <section className="empty-state-message container-fluid empty">
            <div className="row">
              <div className="empty-state-message-margin">
                <div className="empty-state-icon-wrapper">
                  <svg className="empty-state-icon" width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Album</title><path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </section>
        );

        renderDisabled = "disabled";

      } else if (this.props.playlist.playlistSongIds.length !== 0) {
        let source = this.props.songs[this.props.playlist.playlistSongIds[0]] ? this.props.songs[this.props.playlist.playlistSongIds[0]].albumCover : "";
        renderCoverArt = (
          <div className="track-list-img-title">
            <div className="wrapper">
              <img className="playlist-cover-img" src={source} />
            </div>
            <div className="playlist-title-wrapper">
              <div className="album-title">
                <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
              </div>
              <div className="ellipsis-one-line">
                <span>
                  {this.props.playlist ? this.props.playlist.creatorName : ""}
                </span>
              </div>
            </div>
            <div className="spotify-small-text">
              <span dir="auto">
                <Link to={`/app/artist/${this.props.playlist ? this.props.playlist.artistId : ""}`}>{this.props.playlist ? this.props.playlist.artistName : ""}</Link>
              </span>
            </div>
          </div>
        );

        renderDisabled = "";

        renderCoverArtSmaller = (
          <div className="wrapper">
            <img className="playlist-cover-img" src={source} />
          </div>
        );

        renderSongRows = (
          <section className="track-list-container">
            <ol className="track-list">
              {renderSongs}
            </ol>
          </section>
        );

      }
    }
    let currentPlayingTable;
    let currentPlayingId;

    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }

    let extraButtons = (
      <div className="track-list-header-body-children">
        <div className="track-list-header-body-extra-buttons">
          <button className={`track-list-header-body-heart-buttons-body ${this.props.currentUser.playlistIds.includes(parseInt(this.props.playlistId)) ? 'invisible' : ""}`}>
            <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
          </button>
          <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
            <button className="track-list-header-body-three-dots-buttons-body" onClick={this.togglePlaylistMenu.bind(this)}>
              <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
            </button>
          </ContextMenuTrigger>

        </div>
      </div>
    );

    let extraButtonsSmaller = (
      <div className="track-list-extra-buttons-smaller">
        <button className={`track-list-header-body-heart-buttons-body ${this.props.currentUser.playlistIds.includes(parseInt(this.props.playlistId)) ? 'invisible' : ""}`}>
          <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
        </button>
        <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
          <button className={`track-list-header-body-three-dots-buttons-body`} onClick={this.togglePlaylistMenu.bind(this)}>
            <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
          </button>
        </ContextMenuTrigger>
      </div>
    );

    return (
          <div className="playlist-show-main-content" >
            <div>
              <div className="playlist-content-spacing" >
                <section className="content-playlist">
                  <div className="container-fluid">
                    <div className="album-index">
                        <div className="track-list-header" >
                          <div className="track-list-header-wrapper">

                            <MediaQuery minDeviceWidth={1201}>
                              {renderCoverArt}

                              <MediaQuery maxWidth={1200}>

                                {renderCoverArtSmaller}
                                <div className="album-info-smaller">
                                  <div className="album-title-author-smaller">
                                    <div className="album-title-smaller">
                                      <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
                                    </div>

                                    <div className="display-flex">
                                      <div className="ellipsis-one-line">
                                        <span dir="auto">
                                          <Link to={`/app/artist/${this.props.playlist ? this.props.playlistId : ""}/overview`}>{this.props.playlist ? this.props.playlist.creatorName : ""}</Link>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="album-year-count-smaller">
                                    {
                                      `${this.props.playlist ? (this.props.playlist.songCount ? (this.props.playlist.songCount === 1 ? this.props.playlist.songCount + ' song' : this.props.playlist.songCount + ' songs') : "") : ""}`
                                    }
                                  </p>
                                  <div className="track-list-buttons-smaller">
                                    <div className="track-list-header-play-button-top-smaller">
                                      <button onClick={this.handleButtonClick} className="track-list-header-play-button">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'playlist' && currentPlayingId.toString() === this.props.playlistId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                                    </div>
                                    {/* extraButtonsSmaller */}
                                  </div>
                                </div>
                              </MediaQuery>
                            </MediaQuery>

                            <MediaQuery maxDeviceWidth={1200}>
                              {renderCoverArtSmaller}
                              <div className="album-info-smaller">
                                <div className="album-title-author-smaller">
                                  <div className="album-title-smaller">
                                    <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
                                  </div>
                                  <div>
                                    <span dir="auto" className="album-by">By</span>
                                    <span dir="auto">
                                      <Link to={`/app/artist/${this.props.playlist ? this.props.playlist.artistId : ""}`}>{this.props.playlist ? this.props.playlist.artistName : ""}</Link>
                                    </span>
                                  </div>
                                </div>
                                <p className="album-year-count-smaller">
                                  {`${this.props.playlist ? (this.props.playlist.songCount ? (this.props.playlist.songCount === 1 ? this.props.playlist.songCount + ' song' : this.props.playlist.songCount + ' songs') : "") : ""}`}
                                </p>
                                <div className="track-list-buttons-smaller">
                                  <div className="track-list-header-play-button-top-smaller">
                                    <button onClick={this.handleButtonClick} className="track-list-header-play-button">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'playlist' && currentPlayingId.toString() === this.props.playlistId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                                  </div>
                                  <div className="track-list-extra-buttons-smaller">
                                    <button className={`track-list-header-body-heart-buttons-body ${this.props.currentUser.playlistIds.includes(parseInt(this.props.playlistId)) ? 'invisible' : ""}`}>
                                      <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                                    </button>
                                    <ContextMenuTrigger id="three" ref={c => this.toggle = c}>
                                      <button className="track-list-header-body-three-dots-buttons-body" onClick={this.togglePlaylistMenu.bind(this)}>
                                        <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                      </button>
                                    </ContextMenuTrigger>

                                  </div>
                                </div>
                              </div>
                            </MediaQuery>

                            <div className="track-list-header-play-button-top">
                              <button onClick={this.handleButtonClick} className={`track-list-header-play-button ${renderDisabled}`}>{currentPlayingTable && currentPlayingId && currentPlayingTable === 'playlist' && currentPlayingId.toString() === this.props.playlistId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                            </div>
                            <div className="track-list-header-body">
                              <p className="track-list-count">{`${this.props.playlist ? (this.props.playlist.songCount ? (this.props.playlist.songCount === 1 ? this.props.playlist.songCount + ' song' : this.props.playlist.songCount + ' songs') : "") : ""}`}</p>
                              {extraButtons}
                            </div>
                          </div>

                        </div>
                        <div className="playlist-song-lists">
                          {renderSongRows}
                        </div>
                    </div>

                  </div>
                </section>
                <ContextMenu id="two">
                  <div className={`${removePlaylistMenu === "" ? 'display-none' : ""}`}>
                    <MenuItem data={{foo: `${removePlaylistMenu}`}} onClick={this.handleContextMenuClick.bind(this)}>
                      {removePlaylistMenu}
                    </MenuItem>
                  </div>
                  <div>
                    <MenuItem data={{foo: this.props.clickedSongId && this.props.currentUser.likeSongIds.includes(this.props.clickedSongId.id) ? '' : 'Save to your Favorite Songs'}} onClick={this.handleContextMenuClick.bind(this)}>
                      Save to your Favorite Songs
                    </MenuItem>
                  </div>
                </ContextMenu>

                <ContextMenu id="three">
                  <MenuItem data={{foo: `${deletePlaylistMenu}`}} onClick={this.handleContextMenuClick.bind(this)}>
                    {deletePlaylistMenu}
                  </MenuItem>
                </ContextMenu>
              </div>
            </div>
          </div>
    );
  }
}
