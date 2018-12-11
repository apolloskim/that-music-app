import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import DropDownContainer from '../dropdown';
import {fetchCurrentSong, receivePlay, receiveSongQueue, receiveClickedSongId} from '../../actions/song_actions';
import {receiveDropdownControl} from '../../actions/dropdown_actions';
import {fetchCurrentPlaylists} from '../../actions/playlist_actions';
import { Link } from 'react-router-dom';

class ArtistOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
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
    if(this.props.currentSong !== this.state.formerSong) {
      this.setState({formerSong: this.props.currentSong});
      window.audio.pause();
      window.audio.src = this.props.currentSong.songUrl;
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

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }


  render() {

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
                <img src={album.imageUrl} style={Object.values(this.props.albums).length === 1 ? oneAlbumSize : null}/>
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
            onClick={this.handleClick(song)}
            onMouseEnter={this.handleMouseEnter(idx)}
            onMouseLeave={this.handleMouseLeave.bind(this)}>

            {
              Object.values(this.props.currentSong).length !== 0
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
                    Object.values(this.props.currentSong).length !== 0
                    ? (song.id === this.props.currentSong.id
                      ? "track-list-name-neon"
                      : "track-list-name")
                    : "track-list-name"
                  }>{song.title}</div>
                  {explicit}
              </div>
            </div>
            {this.state.idxMouseOver === idx ? renderMore(song.id) : ""}
            <div className="track-list-duration">
              <div className=
                {
                  Object.values(this.props.currentSong).length !== 0
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
  return {
    artist: state.entities.artists[match.params.artistId],
    albums: state.entities.albums,
    currentSong: state.currentSong.song,
    songs: state.entities.songs,
    currentUserId: state.session.currentUserId,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    songQueue: state.songQueue,
    dropdownPressed: state.ui.dropdownPressed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchCurrentSong: (currentUserId, id) => dispatch(fetchCurrentSong(currentUserId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause)),
    receiveSongQueue: songQueue => dispatch(receiveSongQueue(songQueue)),
    receiveDropdownControl: pressed => dispatch(receiveDropdownControl(pressed)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    receiveClickedSongId: id => dispatch(receiveClickedSongId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistOverview);
