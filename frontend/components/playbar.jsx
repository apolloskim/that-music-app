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
      playing: props.playing,
      pause: props.pause,
      currentTime: null,
      duration: null
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.audio = document.getElementById('root-audio');
    this.handleClick = this.handleClick.bind(this);
    // debugger
    this.playIcon;
    this.playGrayIcon;
    this.mouseMove = this.mouseMove.bind(this);
    this.volumeMouseMove = this.volumeMouseMove.bind(this);
  }

  handleMouseOver(field) {
    return () => this.setState({[field]: !this.state[field]});
  }

  handleClick() {
    if(this.state.pause) {
      window.audio.play();
      this.onPlaying();
      this.props.receivePlay(true, false);
    } else if (this.state.playing) {
      window.audio.pause();
      this.onPause();
      this.props.receivePlay(false, true);
    }
  }

  onPlaying() {
    this.setState({playing: true, pause: false});
  }

  onPause() {
    this.setState({playing: false, pause: true});
  }

  positionHandle(position) {
    let handleLeft = position - 0;
    if (handleLeft >= 0 && handleLeft <= this.timeline.offsetWidth) {
      this.status.style.width = (handleLeft * 100 / this.timeline.offsetWidth) + "%";
    }
    if (handleLeft < 0) {
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
    // debugger
    let volumePosition = e.pageX - this.volumeControl.offsetLeft;
    this.volumePositionHandle(volumePosition);
    window.audio.volume = ((volumePosition) / this.volumeControl.offsetWidth);
  }

  componentDidMount() {
    window.audio.addEventListener("timeupdate", () => {
      let ratio = window.audio.currentTime / window.audio.duration;
      let position = this.timeline.offsetWidth * ratio;
      let currentSecond = Math.round(window.audio.currentTime % 60).toString().length < 2 ? '0' + Math.round(window.audio.currentTime % 60).toString() : Math.round(window.audio.currentTime % 60).toString();
      let currentMinute = Math.round(window.audio.currentTime / 60);
      let durationSecond = Math.round(window.audio.duration % 60).toString().length < 2 ? '0' + Math.round(window.audio.duration % 60).toString() : Math.round(window.audio.duration % 60).toString();
      let durationMinute = Math.round(window.audio.duration / 60);

      this.setState({currentTime: `${currentMinute}:${currentSecond === '60' ? '00' : currentSecond}`, duration: `${durationMinute}:${durationSecond}`});
      this.positionHandle(position);
    });
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



    // debugger
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
                  <button className="player-controls-previous-next-button" onMouseEnter={this.handleMouseOver("mousePreviousOver")} onMouseLeave={this.handleMouseOver("mousePreviousOver")}>
                    <img src={this.state.mousePreviousOver ? window.previousIcon : window.previousGrayIcon} />
                  </button>
                  <button className="player-controls-play-button" onClick={this.handleClick} onMouseEnter={this.handleMouseOver("mousePlayOver")} onMouseLeave={this.handleMouseOver("mousePlayOver")}>
                    <img src={this.state.mousePlayOver ? this.playIcon : this.playGrayIcon} />
                  </button>
                  <button className="player-controls-previous-next-button" onMouseEnter={this.handleMouseOver("mouseNextOver")} onMouseLeave={this.handleMouseOver("mouseNextOver")}>
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
