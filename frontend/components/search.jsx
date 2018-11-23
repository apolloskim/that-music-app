import React from 'react';
import Navbar from './navbar/navbar';
import PlaybarContainer from './playbar-container';
import { connect } from 'react-redux';
import { searchSong, fetchCurrentSong, receivePlay } from '../actions/song_actions';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      mouseOver: false,
      idxMouseOver: null,
      playing: this.props.playing,
      pause: this.props.pause,
      formerSong: this.props.currentSong.song
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(e) {
    this.setState({searchString: e.currentTarget.value});
    this.props.searchSong(e.currentTarget.value);
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

  componentDidUpdate() {
    if(this.props.currentSong.song !== this.state.formerSong) {
      this.setState({formerSong: this.props.currentSong.song});
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
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

    let renderMore;
    let renderPlay;
    if(this.state.mouseOver) {
      renderMore = (
        <div className="track-list-more">
          <div className="track-list-more-margin-top">
            <button className="track-list-more-button">
              <img className="track-list-row-body-dots-icon" src={window.threeDotsIcon}/>
            </button>
          </div>
        </div>
      );

      renderPlay = (
        <div className="music-note-icon-padding">
          <div className="music-note-icon-center">
            <div className="music-note-icon-margin">
              <img className="music-note-icon" src={window.musicPlayIcon} />
            </div>
          </div>
        </div>
      );
    }

    let renderSongs;
    if (this.props.songs && this.state.searchString !== "") {
      renderSongs = Object.values(this.props.songs).map( (song, idx) => {
        return (
          <li key={idx} className="track-list-row" onDoubleClick={this.handleClick(song)} onMouseEnter={this.handleMouseEnter(idx)} onMouseLeave={this.handleMouseLeave.bind(this)}>
            {this.state.idxMouseOver === idx ? renderPlay : renderNote}
            <div className="track-list-column">
              <div className="track-list-column-margin">
                <div className="track-list-name">{song.title}</div>
                <div className="track-list-name-second-line">
                  <span className="explicit-label">explicit</span>
                  <span>
                    <Link className="track-list-link" to="">{song.artist}</Link>
                  </span>
                  <span className="track-list-row-dot">•</span>
                  <span>
                    <Link className="track-list-link" to="">{song.album}</Link>
                  </span>
                </div>
              </div>
            </div>
            {this.state.idxMouseOver === idx ? renderMore : ""}
            <div className="track-list-duration">
              <div className="track-list-duration-margin-top">
                <span>{song.duration}</span>
              </div>
            </div>
          </li>
        );
      });
    }

    // console.log(this.state.searchString);
    return (
      <div className="search-container">
        <Navbar />
          <section className="search">
            <div className="search-input-box">
              <div className="search-content-spacing">
                <input type="text" onChange={this.handleSearch.bind(this)} className="search-input-box-input" placeholder="Start typing..." />
              </div>
            </div>
          </section>
          <ul className="searched-songs-lists">
            {renderSongs}
          </ul>
        <PlaybarContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.entities.songs,
    currentSong: state.currentSong,
    currentUserId: state.session.currentUserId,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchSong: str => {
      dispatch(searchSong(str))
    },
    fetchCurrentSong: (userId, id) => dispatch(fetchCurrentSong(userId, id)),
    receivePlay: (playing, pause) => dispatch(receivePlay(playing, pause))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
