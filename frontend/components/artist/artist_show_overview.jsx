import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import {
  fetchCurrentSong, 
  receivePlay, 
  receiveSongQueue, 
  receiveClickedSongId, 
  createLikeSong, 
  createPlaylistSong,
  receiveCurrentSongLikeStatus } from '../../actions/song_actions';
import {receiveDropdownControl} from '../../actions/dropdown_actions';
import {fetchCurrentPlaylists} from '../../actions/playlist_actions';
import { Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';
import { receiveCurrentPlayingPage, createCurrentlyVisited } from '../../actions/session_actions';


class ArtistOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong,
      actionPlaylist: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId.id);
      that.setState({actionPlaylist: false});
    };
  }

  toggleMenu(id, songId) {
    let that = this;
    return e => {
      e.stopPropagation();
      if(that.toggle) {
        that.toggle.handleContextClick(e);
        that.props.receiveClickedSongId(id, songId);
      }
    }
  }

  handleMouseEnter(idx) {
    return () => {
      this.setState({mouseOver: true, idxMouseOver: idx});
    }
  }

  handleMouseLeave() {
    this.setState({mouseOver: false, idxMouseOver: null});
  }

  handleClick(song) {
    let that = this;
    return (e) => {
      // if (that.props.playing) {
      //   that.props.receivePlay(false, true);
      // } else 
      
      if (song.id !== that.props.currentSong.id) {
        that.props.fetchCurrentSong(that.props.currentUserId, song.id);
        that.props.receivePlay(true, false, song.title);
        if (that.props.songQueue[0] !== Object.values(that.props.songs)[0]) {
          that.props.receiveSongQueue(Object.values(that.props.songs).map(song => song.id));
        }
        that.props.createCurrentlyVisited(that.props.currentUserId, that.props.artistId, 'artist', that.props.artist.name, null, that.props.artist.thumbImageUrl, null);
      } else {
        that.props.receivePlay(true, false, song.title);
      }
    };
  }



  componentDidUpdate() {
    if(this.state.actionPlaylist === 'Save to your Favorite Songs') {
      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
      this.props.receiveCurrentSongLikeStatus(true);
      this.setState({actionPlaylist: false});
    } 
  }

  handleButtonClick(id) {
    return (e) => {
      e.stopPropagation();
      if (!this.props.dropdownPressed) {
        this.props.receiveDropdownControl(true);
        document.addEventListener("click", this.closeDropdown);
      }
      this.props.receiveClickedSongId(id);
    }
  }

  closeDropdown() {
    this.props.receiveDropdownControl(false);
    document.removeEventListener("click", this.closeDropdown);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
  }

  handleContextMenuClick(e, data) {
    this.setState({actionPlaylist: data.foo});
  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({actionPlaylist: false});
  }


  render() {

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
              <div key={idx} className="browse-featured-playlist">
                {renderPlaylist}
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

    const oneAlbumSize = {
      height: 175,
      width: 175
    };

    let renderAlbums;
    if (Object.values(this.props.albums).length !== 0) {
      renderAlbums = (
        Object.values(this.props.albums).map( ( album, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/album/${album.id}`} className="cover-art-text">
                  <img src={album.imageUrl} style={Object.values(this.props.albums).length === 1 ? oneAlbumSize : null}/>
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/album/${album.id}`} className="cover-art-text">{album.title}</Link>
                </div>
              </div>
            </div>
          );
        }
      ));
    };

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
    if (Object.values(this.props.songs).length !== 0) {
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
            className="track-list-row fewer-padding"
            onDoubleClick={this.handleClick(song)}
            onMouseEnter={this.handleMouseEnter(idx)}
            onMouseLeave={this.handleMouseLeave.bind(this)}>

            {
              this.props.currentSong && Object.values(this.props.currentSong).length !== 0
              ? (this.state.idxMouseOver === idx
                ? (song.id === this.props.currentSong.id
                  ? renderPlayNeon : renderPlay)
                  : (song.id === this.props.currentSong.id
                    ? renderNoteNeon
                    : renderNote))
              : (this.state.idxMouseOver === idx ? renderPlay : renderNote)
            }

            <div className="album-cover-padding">
              <img src={song.albumCover} />
            </div>

            <div className="track-list-column">
              <div className="track-list-column-margin">
                <div className=
                  {
                    this.props.currentSong && Object.values(this.props.currentSong).length !== 0
                    ? (song.id === this.props.currentSong.id
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
                  this.props.currentsong && Object.values(this.props.currentSong).length !== 0
                  ? (song.id === this.props.currentSong.id
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


    return(
      <div>
        <section className="container-fluid artist-music">
          <div className="row">
            {playlistForm}
            <div className="input-box-content-spacing">
              <section className="artist-toptracks">
                <h1 className="browse-featured-header-new-releases header-margin" dir="auto">Popular</h1>
                <section className="track-list-container">
                  <ol className="track-list">
                    {renderSongs}
                  </ol>
                </section>
              </section>
            </div>
          </div>
          <ContextMenu id="two">
            <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleContextMenuClick.bind(this)}>
              Add to Playlist
            </MenuItem>
            <MenuItem data={{foo: this.props.clickedSongId && this.props.currentUser.likeSongIds.includes(this.props.clickedSongId.id) ? '' : 'Save to your Favorite Songs'}} onClick={this.handleContextMenuClick.bind(this)}>
              Save to your Favorite Songs
            </MenuItem>
          </ContextMenu>
        </section>

        <section className="artist-albums">
          <div className="input-box-content-spacing">
            <h1 className="browse-featured-header-new-releases header-margin" dir="auto">Albums</h1>
            <div className="browse-featured-playlist-lists">
              <div className="container-fluid">
                <div className="album-index row">
                  {renderAlbums}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

const mapStateToProps = (state, {match})=> {

  let artistId = match.params.artistId;
  return {
    songs: state.entities.songs,
    artist: state.entities.artists[match.params.artistId],
    artistId,
    albums: state.entities.albums,
    currentSong: state.currentSong.song,
    songs: state.entities.songs,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueue: state.songQueue,
    dropdownPressed: state.ui.dropdownPressed,
    clickedSongId: state.clickedSongId,
    playlists: state.currentPlaylists,
    currentPlayingPage: state.currentPlayingPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause, requestedSong) => dispatch(receivePlay(playing, pause, requestedSong)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveDropdownControl: pressed => dispatch(receiveDropdownControl(pressed)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id)),
    createPlaylistSong: (playlist_id, song_id) => dispatch(createPlaylistSong(playlist_id, song_id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    receiveCurrentPlayingPage: (id, type, title) => dispatch(receiveCurrentPlayingPage(id, type, title)),
    createCurrentlyVisited: (user_id, table_id, table, title, imageUrl, thumbImage, coverImage) => dispatch(createCurrentlyVisited(user_id, table_id, table, title, imageUrl, thumbImage, coverImage)),
    receiveCurrentSongLikeStatus: likeStatus => dispatch(receiveCurrentSongLikeStatus(likeStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistOverview);
