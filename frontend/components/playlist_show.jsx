import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import PlaybarContainer from './playbar-container';
import DropDownContainer from './dropdown';

export default class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong.song
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
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
      if (that.props.songQueue.length !== Object.values(that.props.songs).length) {
        that.props.receiveSongQueue(Object.values(that.props.songs).map(song => song.id));
      }
    };
  }

  componentDidUpdate() {
    if(this.props.currentSong.song !== this.state.formerSong) {
      this.setState({formerSong: this.props.currentSong.song});
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
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
      renderMore = (id) => {
        return(
          <div className="track-list-more">
            <div className="track-list-more-margin-top">
              <button className="track-list-more-button" onClick={this.handleButtonClick(id)}>
                <img className="track-list-row-body-dots-icon" src={window.threeDotsIcon}/>
              </button>
            </div>
            <DropDownContainer ref={dropdown => this.dropdown = dropdown}/>
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

            {this.state.idxMouseOver === idx
              ? (song.id === this.props.currentSong.song.id
                ? renderPlayNeon : renderPlay)
                : (song.id === this.props.currentSong.song.id
                  ? renderNoteNeon
                  : renderNote)}
            <div className="track-list-column">
              <div className="track-list-column-margin">
                <div className={song.id === this.props.currentSong.song.id
                    ? "track-list-name-neon"
                    : "track-list-name"}>{song.title}</div>
                {explicit}
              </div>
            </div>
            {this.state.idxMouseOver === idx ? renderMore(song.id) : ""}
            <div className="track-list-duration">
              <div className={song.id === this.props.currentSong.song.id
                  ? "track-list-duration-margin-top-neon"
                  : "track-list-duration-margin-top"}>
                <span>{song.duration}</span>
              </div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="album-show-root">
        <div className="playlist-show-container">
          <div className="playlist-show-main-content" >
            <div className="playlist-content-spacing" >
              <section className="content-playlist">
                <div className="cover-art-show">
                  <div>
                    <div className="track-list-header" >
                      <div className="track-list-img-title">
                        <div className="wrapper">
                          <img className="playlist-cover-img" src={this.props.playlist ? this.props.playlist.imageUrl : ""} />
                        </div>
                        <div className="playlist-title-wrapper">
                          <div className="album-title">
                            <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
                          </div>
                        </div>
                        <div className="spotify-small-text">
                          <span>that music app</span>
                        </div>
                      </div>
                      <div className="track-list-header-play-button-top">
                        <button onClick={this.handleClick(Object.values(this.props.songs)[0])} className="track-list-header-play-button">PLAY</button>
                      </div>
                      <div className="track-list-header-body">
                        <p className="track-list-count">{`${this.props.playlist ? this.props.playlist.songCount : ""} songs`}</p>
                        <div className="track-list-header-body-children">
                          <div className="track-list-header-body-extra-buttons">
                            <button className="track-list-header-body-heart-buttons-body">
                              <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                            </button>
                            <button className="track-list-header-body-three-dots-buttons-body">
                              <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                            </button>
                          </div>
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
