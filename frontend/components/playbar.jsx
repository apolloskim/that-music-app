import React from 'react';
import {Link} from 'react-router-dom';

export default class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseHeartOver: false,
      mouseShuffleOver: false,
      mousePreviousOver: false,
      mousePlayOver: false,
      mouseNextOver: false,
      mouseRepeatOver: false,
      mouseQueueOver: false,
      mouseProgressBarOver: false,
      mouseVolumeBarOver: false,
      playing: this.props.playing,
      pause: this.props.pause,
      currentTime: null,
      duration: null
    }
    // this.timeline = React.createRef();
    // this.slider = React.createRef();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.audio = document.getElementById('root-audio');
    this.handleClick = this.handleClick.bind(this);
    this.playIcon = window.playIcon;
    this.playGrayIcon = window.playGrayIcon;
    this.mouseMove = this.mouseMove.bind(this);
    this.volumeMouseMove = this.volumeMouseMove.bind(this);
    this.playNextSong = this.playNextSong.bind(this);
    this.positionHandle = this.positionHandle.bind(this);
    this.handleAudioUpdate = this.handleAudioUpdate.bind(this);
  }

  handleMouseOver(field) {
    return () => this.setState({[field]: !this.state[field]});
  }

  handleClick() {
    if(this.props.pause) {
      window.audio.play();
      // this.onPlaying();
      this.props.receivePlay(true, false);
    } else if (this.props.playing) {
      window.audio.pause();
      this.onPause();
      this.props.receivePlay(false, true);
    } else {
      window.audio.play();
      this.onPlaying();
      this.props.receivePlay(true, false);
    }
  }

  onPlaying() {
    this.setState({playing: true, pause: false});
  }

  onPause() {
    this.setState({playing: false, pause: true});
  }

  positionHandle(position) {
    if (position >= 0 && position <= this.timeline.offsetWidth) {
      this.status.style.width = (position * 100 / this.timeline.offsetWidth) + "%";
    }
    if (position < 0) {
      this.slider.style.width = "0px";
    }

  }

  volumePositionHandle(position) {
    let handleLeft = position - 0;
    if (handleLeft >= 0 && handleLeft <= this.volumeControl.offsetWidth) {
      this.volumeStatus.style.width = (handleLeft * 100 / this.volumeControl.offsetWidth) + "%";
    }
    if (handleLeft < 0) {
      this.slider.style.width = "0px";
    }

  }

  mouseMove(e) {
    let position = e.pageX - this.timeline.offsetLeft;
    this.positionHandle(position);
    window.audio.currentTime = ((position) / this.timeline.offsetWidth) * window.audio.duration;
  }

  volumeMouseMove(e) {

    let volumePosition = e.pageX - this.volumeControl.offsetLeft;
    this.volumePositionHandle(volumePosition);
    window.audio.volume = ((volumePosition) / this.volumeControl.offsetWidth);
  }


  componentDidMount() {

    window.audio = document.getElementById('root-audio');
    window.audio.src = Object.values(this.props.currentSong).length !== 0 ? this.props.currentSong.song.songUrl: "";
  //   window.audio.ontimeupdate = () => {
  //     let ratio = window.audio.currentTime / window.audio.duration;
  //     let position = this.timeline.offsetWidth * ratio;
  //     let currentSecond = Math.round(window.audio.currentTime % 60).toString().length < 2 ? '0' + Math.round(window.audio.currentTime % 60).toString() : Math.round(window.audio.currentTime % 60).toString();
  //     let currentMinute = Math.round(window.audio.currentTime / 60);
  //     let durationSecond = Math.round(window.audio.duration % 60).toString().length < 2 ? '0' + Math.round(window.audio.duration % 60).toString() : Math.round(window.audio.duration % 60).toString();
  //     let durationMinute = Math.round(window.audio.duration / 60);
  //
  //     this.setState({currentTime: `${currentMinute}:${currentSecond === '60' ? '00' : currentSecond}`, duration: `${durationMinute}:${durationSecond}`});
  //     this.positionHandle(position);
  //     this.playNextSong();
  //   };
  // }

    window.audio.addEventListener("timeupdate", this.handleAudioUpdate);
  }

  handleAudioUpdate() {
    let ratio = window.audio.currentTime / window.audio.duration;
    let position = this.timeline.offsetWidth * ratio;
    let currentSecond = Math.round(window.audio.currentTime % 60).toString().length < 2 ? '0' + Math.round(window.audio.currentTime % 60).toString() : Math.round(window.audio.currentTime % 60).toString();
    let currentMinute = Math.round(window.audio.currentTime / 60);
    let durationSecond = Math.round(window.audio.duration % 60).toString().length < 2 ? '0' + Math.round(window.audio.duration % 60).toString() : Math.round(window.audio.duration % 60).toString();
    let durationMinute = Math.round(window.audio.duration / 60);

    this.setState({currentTime: `${currentMinute}:${currentSecond === '60' ? '00' : currentSecond}`, duration: `${durationMinute}:${durationSecond}`});
    this.positionHandle(position);
    this.playNextSong();
  }

  componentWillUnmount() {
    window.audio.removeEventListener("timeupdate", this.handleAudioUpdate);
  }

  playNextSong() {
    let nextSongIdx;
    if (window.audio.currentTime === window.audio.duration) {
      window.audio.currentTime = "";
      nextSongIdx = this.props.songQueue.indexOf(this.props.currentSong.song.id) + 1;
      if (nextSongIdx < this.props.songQueue.length) {
        this.props.fetchCurrentSong(this.props.currentUserId, this.props.songQueue[nextSongIdx]);
        window.audio.src = this.props.currentSong.song.songUrl;
        window.audio.play();
        this.props.receivePlay(true, false);
      }
    }
  }

  skipToPrevSong() {
    let prevSongIdx;
    prevSongIdx = this.props.songQueue.indexOf(this.props.currentSong.song.id) - 1;
    if (prevSongIdx < 0) {
      this.props.fetchCurrentSong(this.props.currentUserId, this.props.songQueue[this.props.songQueue.length + prevSongIdx]);
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
      this.props.receivePlay(true, false);
    } else if (prevSongIdx >= 0 && prevSongIdx < this.props.songQueue.length) {
      this.props.fetchCurrentSong(this.props.currentUserId, this.props.songQueue[prevSongIdx]);
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
      this.props.receivePlay(true, false);
    }
  }

  skipToNextSong() {
    let nextSongIdx;
    nextSongIdx = this.props.songQueue.indexOf(this.props.currentSong.song.id) + 1;
    if (nextSongIdx > this.props.songQueue.length - 1) {
      this.props.fetchCurrentSong(this.props.currentUserId, this.props.songQueue[nextSongIdx - this.props.songQueue.length]);
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
      this.props.receivePlay(true, false);
    } else if (nextSongIdx > 0 && nextSongIdx < this.props.songQueue.length) {
      this.props.fetchCurrentSong(this.props.currentUserId, this.props.songQueue[nextSongIdx]);
      window.audio.src = this.props.currentSong.song.songUrl;
      window.audio.play();
      this.props.receivePlay(true, false);
    }
  }


  render() {
    let albumCover = this.props.currentSong.song ? this.props.currentSong.song.albumCover : " ";
    let songTitle = this.props.currentSong.song ? this.props.currentSong.song.title : " ";
    let songArtist = this.props.currentSong.song ? this.props.currentSong.song.artist : " ";
    if (this.props.playing) {
      this.playIcon = window.pauseIcon;
      this.playGrayIcon = window.pauseGrayIcon;
    } else if (this.props.pause) {
      this.playIcon = window.playIcon;
      this.playGrayIcon = window.playGrayIcon;
    }

    let progressBarDuration;
    if (this.state.mouseProgressBarOver) {
      progressBarDuration = (
        <div className="middle-align" ref={timeline => this.timeline = timeline}>
          <div className="play-bar-progress-status-green" ref={status => this.status = status}></div>
          <div className="play-bar-progress-slider" ref={slider => this.slider = slider}></div>
        </div>
      );
    } else if (!this.state.mouseProgressBarOver) {
      progressBarDuration = (
        <div className="middle-align" ref={timeline => this.timeline = timeline}>
          <div className="play-bar-progress-status" ref={status => this.status = status}></div>
        </div>
      );
    }


    let volumeBar;
    if (this.state.mouseVolumeBarOver) {
      volumeBar = (
        <div className="volume-progress-bar-background" ref={volumeControl => this.volumeControl = volumeControl}>
          <div className="volume-progress-bar-green" ref={volumeStatus => this.volumeStatus = volumeStatus}></div>
          <div className="volume-bar-slider" ref={volumeSlider => this.volumeSlider = volumeSlider}></div>
        </div>
      );
    } else if (!this.state.mouseVolumeBarOver) {
      volumeBar = (
        <div className="volume-progress-bar-background" ref={volumeControl => this.volumeControl = volumeControl}>
          <div className="volume-progress-bar" ref={volumeStatus => this.volumeStatus = volumeStatus}></div>
        </div>
      );
    }

    return (
      <div className="player-controls">
        <footer className="play-bar-container">
          <div className="play-bar">
            <div className="play-bar-left">
              <div className="current-song-info">
                <span className="current-song-album-cover">
                  <Link to="song">
                    <img src={albumCover}/>
                  </Link>
                </span>
                <div className="current-song-title">
                  <div className="current-song-title-top-line">
                    <Link to="song">{songTitle}</Link>
                  </div>
                  <div className="current-song-title-bottom-line">
                    <Link to="artist">{songArtist}</Link>
                  </div>
                </div>
                <button className="current-song-heart-icon" onMouseEnter={this.handleMouseOver("mouseHeartOver")} onMouseLeave={this.handleMouseOver("mouseHeartOver")}>
                  <img src={this.state.mouseHeartOver ? window.heartIcon : window.heartGrayIcon} />
                </button>
              </div>
            </div>
            <div className="play-bar-center">
              <div className="player-controls-center">
                <div className="player-controls-buttons">
                  <button className="player-controls-shuffle-button" onMouseEnter={this.handleMouseOver("mouseShuffleOver")} onMouseLeave={this.handleMouseOver("mouseShuffleOver")}>
                    <img src={this.state.mouseShuffleOver ? window.shuffleIcon : window.shuffleGrayIcon} />
                  </button>
                  <button className="player-controls-previous-next-button" onClick={this.skipToPrevSong.bind(this)} onMouseEnter={this.handleMouseOver("mousePreviousOver")} onMouseLeave={this.handleMouseOver("mousePreviousOver")}>
                    <img src={this.state.mousePreviousOver ? window.previousIcon : window.previousGrayIcon} />
                  </button>
                  <button className="player-controls-play-button" onClick={this.handleClick} onMouseEnter={this.handleMouseOver("mousePlayOver")} onMouseLeave={this.handleMouseOver("mousePlayOver")}>
                    <img src={this.state.mousePlayOver ? this.playIcon : this.playGrayIcon} />
                  </button>
                  <button className="player-controls-previous-next-button" onClick={this.skipToNextSong.bind(this)} onMouseEnter={this.handleMouseOver("mouseNextOver")} onMouseLeave={this.handleMouseOver("mouseNextOver")}>
                    <img src={this.state.mouseNextOver ? window.nextIcon : window.nextGrayIcon} />
                  </button>
                  <button className="player-controls-repeat-button" onMouseEnter={this.handleMouseOver("mouseRepeatOver")} onMouseLeave={this.handleMouseOver("mouseRepeatOver")}>
                    <img src={this.state.mouseRepeatOver ? window.repeatIcon : window.repeatGrayIcon} />
                  </button>
                </div>
                <div className="player-controls-playbar">
                  <div className="player-controls-playbar-progress-time">{this.state.currentTime ? this.state.currentTime : "0:00"}</div>
                  <div className="progress-bar" onClick={this.mouseMove} onMouseEnter={this.handleMouseOver("mouseProgressBarOver")} onMouseLeave={this.handleMouseOver("mouseProgressBarOver")}>
                    {progressBarDuration}
                  </div>
                  <div className="play-controls-playbar-duration">{this.state.duration ? this.state.duration : '2:45'}</div>
                </div>
              </div>
            </div>
            <div className="play-bar-right">
                <div className="extra-controls">
                  <button className="queue-button" onMouseEnter={this.handleMouseOver("mouseQueueOver")} onMouseLeave={this.handleMouseOver("mouseQueueOver")}>
                    <img src={this.state.mouseQueueOver ? window.playlistIcon : window.playlistGrayIcon} />
                  </button>
                  <div className="volume-bar">
                    <button className="volume-button">
                      <img src={window.maxVolumeGrayIcon} />
                    </button>
                    <div className="volume-progress-bar-container" onClick={this.volumeMouseMove} onMouseEnter={this.handleMouseOver("mouseVolumeBarOver")} onMouseLeave={this.handleMouseOver("mouseVolumeBarOver")}>
                      {volumeBar}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
