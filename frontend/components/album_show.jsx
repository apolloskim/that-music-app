import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import PlaybarContainer from './playbar-container';
import AddPlaylistDropDownContainer from './add_playlist_dropdown_container';
import MediaQuery from 'react-responsive';

export default class AlbumShow extends React.Component {
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
    this.props.fetchAlbum(this.props.albumId);
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
    if(this.props.currentSong.song !== this.state.formerSong) {
      this.setState({formerSong: this.props.currentSong.song});
      window.audio.pause();
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
    }

  }

  handleButtonClick(id, playlistSongId) {
    return (e) => {
      e.stopPropagation();
      if (!this.props.dropdownPressed) {
        this.props.receiveDropdownControl(true);
        document.addEventListener("click", this.closeDropdown);
      }
      this.props.receiveClickedSongId(id, playlistSongId);
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
      renderMore = (id, playlistSongId) => {
        return(
          <div className="track-list-more">
            <div className="track-list-more-margin-top">
              <button className="track-list-more-button" onClick={this.handleButtonClick(id, playlistSongId)}>
                <img className="track-list-row-body-dots-icon" src={window.threeDotsIcon}/>
              </button>
            </div>
            <AddPlaylistDropDownContainer ref={dropdown => this.dropdown = dropdown}/>
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
                                    <Link to={`/app/artist/${this.props.album ? this.props.album.artistId : ""}`}>{this.props.album ? this.props.album.artistName : ""}</Link>
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
                                      <button onClick={this.handleClick(Object.values(this.props.songs)[0])} className="track-list-header-play-button">PLAY</button>
                                    </div>
                                    <div className="track-list-extra-buttons-smaller">
                                      <button className="track-list-header-body-heart-buttons-body">
                                        <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                                      </button>
                                      <button className="track-list-header-body-three-dots-buttons-body">
                                        <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                      </button>
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
                                    <button onClick={this.handleClick(Object.values(this.props.songs)[0])} className="track-list-header-play-button">PLAY</button>
                                  </div>
                                  <div className="track-list-extra-buttons-smaller">
                                    <button className="track-list-header-body-heart-buttons-body">
                                      <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                                    </button>
                                    <button className="track-list-header-body-three-dots-buttons-body">
                                      <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </MediaQuery>

                            <div className="track-list-header-play-button-top">
                              <button onClick={this.handleClick(Object.values(this.props.songs)[0])} className="track-list-header-play-button">PLAY</button>
                            </div>
                            <div className="track-list-header-body">
                              <p className="track-list-count">{`${this.props.album ? this.props.album.year : ""} • ${this.props.album ? this.props.album.songCount : ""} songs`}</p>
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
                        <div className="playlist-song-lists">
                          <section className="track-list-container">
                            <ol className="track-list">
                              {renderSongs}
                            </ol>
                          </section>
                        </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </div>

    );
  }
}
