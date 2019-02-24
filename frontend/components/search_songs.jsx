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
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';
import { openModal } from '../actions/modal_actions';
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
        that.props.receiveSongQueue(Object.values(that.props.songs).map(song => song.id));
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

  handleCloseClick(e) {
    e.stopPropagation();
    this.setState({actionPlaylist: false});
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
                      <Link to={`/app/artist/${song.artistId}/overview`}>{song.artist}</Link>
                    </span>
                    <span className="second-line-separator">•</span>
                    <span className="ellipsis-one-line">
                      <Link to={`/app/album/${song.albumId}`}>{song.album}</Link>
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

        // return (
        //   <li key={idx}
        //     ref={songRow => this.songRow = songRow}
        //     className="track-list-row fewer-padding"
        //     onClick={this.handleClick(song)}
        //     onMouseEnter={this.handleMouseEnter(idx)}
        //     onMouseLeave={this.handleMouseLeave.bind(this)}>
        //
        //     {
        //       Object.values(this.props.currentSong).length !== 0
        //       ? (this.state.idxMouseOver === idx
        //         ? (song.id === this.props.currentSong.id
        //           ? renderPlayNeon : renderPlay)
        //           : (song.id === this.props.currentSong.id
        //             ? renderNoteNeon
        //             : renderNote))
        //       : (this.state.idxMouseOver === idx ? renderPlay : renderNote)
        //     }
        //
        //     <div className="album-cover-padding">
        //       <img src={song.albumCover} />
        //     </div>
        //
        //     <div className="track-list-column">
        //       <div className="track-list-column-margin">
        //         <div className=
        //           {
        //             Object.values(this.props.currentSong).length !== 0
        //             ? (song.id === this.props.currentSong.id
        //               ? "track-list-name-neon"
        //               : "track-list-name")
        //             : "track-list-name"
        //           }>{song.title}</div>
        //           {explicit}
        //       </div>
        //     </div>
        //     {this.state.idxMouseOver === idx ? renderMore(song.id, song.playlistSongId) : ""}
        //     <div className="track-list-duration">
        //       <div className=
        //         {
        //           Object.values(this.props.currentSong).length !== 0
        //           ? (song.id === this.props.currentSong.id
        //             ? "track-list-duration-margin-top-neon"
        //             : "track-list-duration-margin-top")
        //           : "track-list-duration-margin-top"
        //         }>
        //         <span>{song.duration}</span>
        //       </div>
        //     </div>
        //   </li>
        // );
      });
    }

    return (
      <div className="search-content-spacing">
        <div className="container-fluid margin-auto">
          <section className="track-list-container row">
            <ol className="track-list">
              {renderSongs}
            </ol>
          </section>
        </div>

        <ContextMenu id="two">
          <MenuItem data={{foo: 'Add to Playlist'}} onClick={this.handleContextMenuClick.bind(this)}>
            Add to Playlist
          </MenuItem>
          <MenuItem data={{foo: 'Save to your Favorite Songs'}} onClick={this.handleContextMenuClick.bind(this)}>
            Save to your Favorite Songs
          </MenuItem>
        </ContextMenu>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.entities.songs,
    currentSong: state.currentSong,
    queries: ownProps.queries,
    currentUserId: state.session.currentUserId,
    songQueue: state.songQueue,
    clickedSongId: state.clickedSongId
  };
};

const mapDispatchToProps = dispatch => {
  return {

    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause, requestedSong) => dispatch(receivePlay(playing, pause, requestedSong)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id)),
    createPlaylistSong: (playlist_id, song_id) => dispatch(createPlaylistSong(playlist_id, song_id)),
    createLikeSong: (userId, songId) => dispatch(createLikeSong(userId, songId)),
    openModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
