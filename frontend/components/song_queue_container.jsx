import React from 'react';
import { connect } from 'react-redux';
import { searchSong, fetchCurrentSong, receivePlay, receiveSongQueue, receiveShuffleSongQueue, receiveClickedSongId, receiveSongQueueClick } from '../actions/song_actions';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';
import { Link } from 'react-router-dom';
import {fetchAlbum, createLikeAlbum, deleteLikeAlbum} from '../actions/album_actions';
import {fetchCurrentPlaylists} from '../actions/playlist_actions';
import {createPlaylistSong, createLikeSong} from '../actions/song_actions';
import {openModal} from '../actions/modal_actions';
import Modal from './modal';

class SongQueue extends React.Component {

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
    this.reorder = this.reorder.bind(this);
  }

  handlePlaylistClick(playlist) {
    let that = this;
    return e => {
      e.stopPropagation();
      that.props.createPlaylistSong(playlist.id, that.props.clickedSongId.id);
      that.setState({actionPlaylist: false});
    };
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
        that.props.receiveSongQueue(Object.values(that.props.songs).map(song => song.id));
      }
    };
  }

  componentWillUnmount() {
    this.props.receiveSongQueueClick(false);
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

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({actionPlaylist: false});
  }

  reorder(songs, songQueue) {
    let newArr = [];
    for(let i = 0; i < songs.length; i++) {
      for(let j = 0; j < songs.length; j++) {
        if (songs[i].id === songQueue[j]) {
          newArr[j] = songs[i];
        }
      }
    }
    return newArr;
  }

  componentDidMount() {
    this.props.searchSong(null, this.props.songQueue);
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

    let queueIdx;
    let renderSongs = '';
    let newArr = Object.values(this.props.songs);
    if (newArr.length !== 0) {
      newArr = this.reorder(newArr, this.props.shuffle ? this.props.shuffleSongQueue : this.props.songQueue);
      let newQueueArr = this.props.shuffle ? this.props.shuffleSongQueue : this.props.songQueue;
      queueIdx = newQueueArr.indexOf(this.props.currentSong.song.id);
      newArr = newArr.slice(queueIdx);
      renderSongs = newArr.map( (song, idx) => {
        let explicit;
        if (song.explicit) {
          explicit = (
            <div className="track-list-name-second-line">
              <span className="explicit-label">explicit</span>
            </div>
          );
        }


        let songRow = (
          <li
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

        let currentSongRow = (
          <div>
            <h2 className="song-queue-now-playing">Now Playing</h2>
            {songRow}
            <h2 className="song-queue-now-playing">Next Up</h2>
          </div>
        );

        if (song.id === this.props.currentSong.song.id) {
          songRow = currentSongRow;
        }

        return (
          <div key={idx}>
            {songRow}
          </div>
          // <div className={song.id === this.props.currentSong.song.id ? "" : "disabled"}>
          //   {songRow}
          // </div>
        );
      });
    }

    return (
      <div className="search-main-view">
        <Modal />
        <div>
          <div className="search-content-spacing">
            <div className="container-fluid margin-auto">
              <section className="track-list-container row">
                <h1 className="session-show-username session-container">Play Queue</h1>
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

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songQueue: state.songQueue,
    shuffleSongQueue: state.shuffleSongQueue,
    songs: state.entities.songs,
    currentSong: state.currentSong,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    dropdownPressed: state.ui.dropdownPressed,
    playlists: state.currentPlaylists,
    clickedSongId: state.clickedSongId,
    shuffle: state.playStatus.shuffle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchSong: (str, queue) => dispatch(searchSong(str, queue)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveShuffleSongQueue: songQueue => dispatch(receiveShuffleSongQueue(songQueue)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id)),
    createLikeAlbum: (user_id, album_id) => dispatch(createLikeAlbum(user_id, album_id)),
    deleteLikeAlbum: id => dispatch(deleteLikeAlbum(id)),
    createPlaylistSong: (playlist_id, song_id) => dispatch(createPlaylistSong(playlist_id, song_id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    receiveShuffle: (shuffle) => dispatch(receiveShuffle(shuffle)),
    receiveSongQueueClick: clicked => dispatch(receiveSongQueueClick(clicked)),
    openModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongQueue);
