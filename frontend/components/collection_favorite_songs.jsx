import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';
import { connect } from 'react-redux';
import { fetchLikeSongs,
  fetchCurrentSong,
  receivePlay,
  receiveSongQueue,
  receiveClickedSongId,
  deletePlaylistSong,
  createLikeSong,
  deleteLikeSong } from '../actions/song_actions';
import { Link, withRouter } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';

import {fetchPlaylist, deletePlaylist, fetchCurrentPlaylists, removePlaylists} from '../actions/playlist_actions';


class CollectionFavoriteSongs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong.song,
      actionPlaylist: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

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

    return (e) => {
      this.setState({ playing: !this.props.playing, pause: !this.props.pause});
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false);
    };
  }

  componentDidMount() {
    this.props.fetchLikeSongs(this.props.currentUserId);
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
      this.setState({ playing: !this.props.playing, pause: !this.props.pause});
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
    };
  }

  componentDidUpdate() {

    if(this.state.actionPlaylist === 'Remove from this Playlist') {
      this.setState({actionPlaylist: false});
      this.props.deletePlaylistSong(this.props.clickedSongId.playlistSongId);
    } else if (this.state.actionPlaylist === 'Delete') {
      this.setState({actionPlaylist: false});
      this.props.deletePlaylist(this.props.playlistId).then( () => {
        this.props.history.push('/app/collection/playlists');
      });
    } else if (this.state.actionPlaylist === "Save to your Favorite Songs") {
      this.setState({actionPlaylist: false});
      this.props.createLikeSong(this.props.currentUserId, this.props.clickedSongId.id);
    } else if (this.state.actionPlaylist === "Remove from your Favorite Songs") {
      let likeSongId = this.props.currentUser.likeSongs.filter(song => song.song_id === parseInt(this.props.clickedSongId.id))[0].id;
      this.setState({actionPlaylist: false});
      this.props.deleteLikeSong(likeSongId).then( () => this.props.fetchLikeSongs(this.props.currentUserId));
    }
  }

  togglePlaylistMenu(e) {
      e.stopPropagation();
      if(this.toggle) {
        this.toggle.handleContextClick(e);
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

    return (
      <div className="browse-newreleases-container">
        <section className="new-releases-content-spacing">
          <CollectionPlaylistsHeader />
          <ul>
            {renderSongs}
          </ul>
        </section>
        <ContextMenu id="two">
          <MenuItem data={{foo: 'Remove from your Favorite Songs'}} onClick={this.handleContextMenuClick.bind(this)}>
            Remove from your Favorite Songs
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.entities.songs,
    currentSong: state.currentSong,
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueue: state.songQueue,
    clickedSongId: state.clickedSongId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLikeSongs: id => dispatch(fetchLikeSongs(id)),
    fetchCurrentSong: (userId, id) => dispatch(fetchCurrentSong(userId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveClickedSongId: (id, playlistSongId) => dispatch(receiveClickedSongId(id, playlistSongId)),
    removePlaylists: () => dispatch(removePlaylists()),
    deletePlaylistSong: (id) => dispatch(deletePlaylistSong(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    deleteLikeSong: id => dispatch(deleteLikeSong(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionFavoriteSongs));
