import React from 'react';
import { connect } from 'react-redux';
import {
  createPlaylistSong,
  receiveClickedSongId,
  fetchCurrentSong,
  receiveSongQueue,
  createLikeSong,
  receivePlay } from '../actions/song_actions';
import { fetchCurrentPlaylists } from '../actions/playlist_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
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
      that.setState({ playing: !that.props.playing, pause: !that.props.pause});

      that.props.fetchCurrentSong(that.props.currentUserId, song.id);
      that.props.receivePlay(true, false);
      if (that.props.songQueue[0] !== Object.values(that.props.songs)[0]) {
        that.props.receiveSongQueue(Object.values(that.props.songs).slice(0, 5).map(song => song.id));
      }
    };
  }

  componentDidUpdate() {
    if(this.state.actionPlaylist === 'Save to your Favorite Songs') {
      this.setState({actionPlaylist: false});
      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
    }
  }

  handleContextMenuClick(e, data) {
    this.setState({actionPlaylist: data.foo});
    if (data.foo === "Add to Playlist") {
      this.props.openModal();
    }
  }



  render() {

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


    let renderSongs = '';
    let newArr = Object.values(this.props.songs);
    if (newArr.length !== 0 && this.props.queries.length !== 0) {
      newArr = newArr.slice(0, 5);
      renderSongs = newArr.map( (song, idx) => {

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
            onClick={this.handleClick(song)}
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

    const oneAlbumSize = {
      height: 175,
      width: 175
    };

    let renderAlbums;
    if (Object.values(this.props.albums).length !== 0 && this.props.queries.length !== 0) {
      renderAlbums = (
        Object.values(this.props.albums).map( ( album, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/album/${album.id}`}>
                  <img src={album.imageUrl} style={Object.values(this.props.albums).length === 1 ? oneAlbumSize : null}/>
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

    let renderArtists;
    if (Object.values(this.props.artists).length !== 0 && this.props.queries.length !== 0) {
      renderArtists = (
        Object.values(this.props.artists).map( ( artist, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`} className="cover-art-text">
                  <img className="artist-cover-image" src={artist.thumbImageUrl} />
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`} className="cover-art-text">{artist.name}</Link>
                </div>
              </div>
            </div>
          );
        }
      ));
    }

    let renderPlaylist = "";
    let renderPlaylists = "";
    if (Object.values(this.props.playlists).length !== 0 && this.props.queries.length !== 0) {
      renderPlaylists = (
        Object.values(this.props.playlists).map( ( playlist, idx ) => {

          if (playlist.playlistSongIds.length === 0 && !playlist.imageUrl) {
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
    };

    return (
      <div className="search-content-spacing">
        <div className="container-fluid margin-auto">
          <section className="track-list-container row">
            <ol className="track-list">
              {renderSongs}
            </ol>
          </section>

          <ContextMenu id="two">
            <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleContextMenuClick.bind(this)}>
              Add to Playlist
            </MenuItem>
            <MenuItem data={{foo: 'Save to your Favorite Songs'}} onClick={this.handleContextMenuClick.bind(this)}>
              Save to your Favorite Songs
            </MenuItem>
          </ContextMenu>

          <section className="track-list-container row">
            <div className="input-box-content-spacing">
              <h1 className="browse-featured-header-new-releases header-margin text-center" dir="auto">{Object.values(this.props.artists).length !== 0 && this.props.queries.length !== 0 ? "Artists" : ""}</h1>
              <div className="browse-featured-playlist-lists">
                <div className="container-fluid">
                  <div className="album-index row">
                    {renderArtists}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="track-list-container row">
            <div className="input-box-content-spacing">
              <h1 className="browse-featured-header-new-releases header-margin text-center" dir="auto">{Object.values(this.props.albums).length !== 0 && this.props.queries.length !== 0 ? "Albums" : ""}</h1>
              <div className="browse-featured-playlist-lists">
                <div className="container-fluid">
                  <div className="album-index row">
                    {renderAlbums}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="track-list-container row">
            <div className="input-box-content-spacing">
              <h1 className="browse-featured-header-new-releases header-margin text-center" dir="auto">{Object.values(this.props.playlists).length !== 0 && this.props.queries.length !== 0 ? "Playlists" : ""}</h1>
              <div className="browse-featured-playlist-lists">
                <div className="container-fluid">
                  <div className="album-index row">
                    {renderPlaylists}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.entities.songs,
    albums: state.entities.albums,
    artists: state.entities.artists,
    playlists: state.entities.playlists,
    currentSong: state.currentSong,
    queries: ownProps.queries,
    songQueue: state.songQueue,
    currentUserId: state.session.currentUserId,
    currentPlaylists: state.currentPlaylists,
    clickedSongId: state.clickedSongId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    openModal: () => dispatch(openModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
