import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';

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
      duration: null,
      included: this.props.currentUser.likeSongIds.includes(parseInt(this.props.currentSong.song.id)),
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
    this.shuffle = this.shuffle.bind(this);
    this.formerSongQueue = Object.assign([], this.props.songQueue);
    this.originalSongQueue = Object.assign([], this.props.songQueue);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.formerSong = this.props.currentSong ? merge({}, this.props.currentSong) : {};
    this.location = '';
    this.formerPlayStatus = false;
  }

  handleLikeSongClick() {
    if (this.state.included) {
      let likeSongId = this.props.currentUser.likeSongs.filter(song => song.song_id === parseInt(this.props.currentSong.song.id))[0].id;
      this.props.deleteLikeSong(likeSongId).then(() => this.props.fetchLikeSongs(this.props.currentUserId));
      this.setState({included: false});
    } else {
      this.props.createLikeSong(this.props.currentUserId, this.props.currentSong.song.id).then(() => this.props.fetchLikeSongs(this.props.currentUserId));
      this.setState({included: true});
    }
  }

  handleMouseOver(field) {
    return () => this.setState({[field]: !this.state[field]});
  }

  handleClick() {
    if(this.props.pause) {
      this.props.receivePlay(true, false);
    } else if (this.props.playing) {
      this.props.receivePlay(false, true);
    }
  }

  onPlaying() {
    this.setState({playing: true, pause: false});
  }

  onPause() {
    this.setState({playing: false, pause: true});
  }

  handleRepeat() {
    if (this.props.repeat && this.props.repeat !== 'once') {
      this.handleAudioLoop();
      this.props.receiveRepeat('once');
    } else if (this.props.repeat === 'once') {
      this.handleAudioLoop();
      this.props.receiveRepeat(false);
    } else {
      this.props.receiveRepeat(true);
    }
  }

  handleShuffle() {
    if (this.props.shuffle) {
      this.props.receiveShuffle(false);
    } else {
      this.props.receiveShuffle(true);
    }
  }

  shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  positionHandle(position) {
    if (position >= 0 && position <= this.timeline.offsetWidth) {
      this.status.style.width = (position * 100 / this.timeline.offsetWidth) + "%";
    }``
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

  compare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }

  componentDidUpdate() {
    if (this.props.shuffle && !this.compare(this.formerSongQueue, this.props.songQueue)) {
      this.formerSongQueue = Object.assign([], this.props.songQueue);
      let newQueue = Object.assign([], this.props.songQueue);
      newQueue = this.shuffle(newQueue);
      this.props.receiveShuffleSongQueue(newQueue);
    }

    if (this.props.shuffle && this.props.shuffleSongQueue.length === 0) {
      let newQueue = Object.assign([], this.props.songQueue);
      newQueue = this.shuffle(newQueue);
      this.props.receiveShuffleSongQueue(newQueue);
    }

    if (this.props.currentSong.song && this.formerSong.song && this.formerSong.song.id !== this.props.currentSong.song.id && this.props.playing) {
      this.formerSong = merge({}, this.props.currentSong);
      this.setState({included: this.props.currentUser.likeSongIds.includes(parseInt(this.props.currentSong.song.id))});
      // this.props.receivePlay(false, true);
      window.audio.src = this.props.currentSong.song.songUrl;
      this.playAudio();
    }

    if (this.props.currentSong.song && !this.formerSong.song) {
      this.formerSong = merge({}, this.props.currentSong);
      window.audio.src = this.props.currentSong.song.songUrl;
      this.playAudio();
    }

    if (!this.props.shuffle && this.props.shuffleSongQueue.length !== 0) {
      this.props.receiveShuffleSongQueue([]);
    }

    if (this.props.playing && !this.formerPlayStatus) {
      this.formerPlayStatus = true;
      this.playAudio();
    } else if (!this.props.playing && this.formerPlayStatus) {
      this.formerPlayStatus = false;
      this.pauseAudio();
    }
  }

  handleAudioLoop() {
    if (window.audio.loop) {
      window.audio.loop = false;
    } else {
      window.audio.loop = true;
    }
  }

  playAudio() {
    let isPlaying = window.audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2;
    if (!isPlaying) {
      this.props.receivePlay(true, false);
      window.audio.play().then( () => {
        window.audio.addEventListener("timeupdate", this.handleAudioUpdate);
        if (this.props.pause) {
          this.pauseAudio();
        }
      });
    }
  }

  pauseAudio() {
    this.props.receivePlay(false, true);
    window.audio.pause();
    window.audio.removeEventListener("timeupdate", this.handleAudioUpdate);
  }

  handleAudioClose() {
    window.audio.currentTime === 0;

  }


  componentDidMount() {

    window.audio = document.getElementById('root-audio');
    window.audio.src = Object.values(this.props.currentSong).length !== 0 ? this.props.currentSong.song.songUrl: "";
    if (this.props.currentSong.song && this.props.currentSong.song.id) {

      this.props.receiveSongQueue([this.props.currentSong.song.id]);
      this.props.receiveShuffleSongQueue([]);
    }
    // window.audio.addEventListener("timeupdate", this.handleAudioUpdate);
  }

  handleSongQueue() {
    if(this.props.songQueueClicked) {
      this.props.history.push(this.location);
      this.props.receiveSongQueueClick(true);
    } else {
      this.location = this.props.history.location.pathname;
      this.props.history.push('/app/songQueue');
      this.props.receiveSongQueueClick(true);
    }
    // this.setState({songQueueClick: !this.state.songQueueClick});
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

  // componentWillUnmount() {
  //   window.audio.removeEventListener("timeupdate", this.handleAudioUpdate);
  // }


  playNextSong() {
    let nextSongIdx;
    if (window.audio.currentTime === window.audio.duration) {
      window.audio.currentTime = "";
      let songQueue = this.props.shuffle ? Object.assign([], this.props.shuffleSongQueue) : Object.assign([], this.props.songQueue);
      nextSongIdx = songQueue.indexOf(this.props.currentSong.song.id) + 1;
      if (nextSongIdx < songQueue.length) {
        this.pauseAudio();
        this.props.fetchCurrentSong(this.props.currentUserId, songQueue[nextSongIdx]).then( () => {
          window.audio.src = this.props.currentSong.song.songUrl;
          this.playAudio();
        });
      } else {
        if (this.props.repeat) {
          nextSongIdx = nextSongIdx - songQueue.length;
          this.pauseAudio();
          this.props.fetchCurrentSong(this.props.currentUserId, songQueue[nextSongIdx]).then( () => {
            window.audio.src = this.props.currentSong.song.songUrl;
              this.playAudio();
          });
        }
      }
    }
  }

  skipToPrevSong() {
    let prevSongIdx;
    let songQueue = this.props.shuffle ? Object.assign([], this.props.shuffleSongQueue) : Object.assign([], this.props.songQueue);
    prevSongIdx = songQueue.indexOf(this.props.currentSong.song.id) - 1;
    if (prevSongIdx < 0) {
      this.pauseAudio();
      this.props.fetchCurrentSong(this.props.currentUserId, songQueue[songQueue.length + prevSongIdx]);
    } else if (prevSongIdx >= 0 && prevSongIdx < songQueue.length) {
      this.pauseAudio();
      this.props.fetchCurrentSong(this.props.currentUserId, songQueue[prevSongIdx]);
    }
    window.audio.src = this.props.currentSong.song.songUrl;
    this.props.receivePlay(true, false);
  }

  skipToNextSong() {
    let nextSongIdx;
    let songQueue = this.props.shuffle ? Object.assign([], this.props.shuffleSongQueue) : Object.assign([], this.props.songQueue);
    nextSongIdx = songQueue.indexOf(this.props.currentSong.song.id) + 1;
    if (nextSongIdx > songQueue.length - 1) {
      this.pauseAudio();
      this.props.fetchCurrentSong(this.props.currentUserId, songQueue[nextSongIdx - songQueue.length]);
    } else if (nextSongIdx > 0 && nextSongIdx < songQueue.length) {
      this.pauseAudio();
      this.props.fetchCurrentSong(this.props.currentUserId, songQueue[nextSongIdx]);
    }
    window.audio.src = this.props.currentSong.song.songUrl;
    this.props.receivePlay(true, false);
  }

  render() {
    let albumCover = this.props.currentSong.song ? this.props.currentSong.song.albumCover : " ";
    let songTitle = this.props.currentSong.song ? this.props.currentSong.song.title : " ";
    let songArtist = this.props.currentSong.song ? this.props.currentSong.song.artist : " ";

    let artistId = this.props.currentSong.song ? this.props.currentSong.song.artistId : ' ';
    let albumId = this.props.currentSong.song ? this.props.currentSong.song.albumId : ' ';

    if (this.props.playing) {
      this.playIcon = window.pauseIcon;
      this.playGrayIcon = window.pauseGrayIcon;
    } else if (this.props.pause) {
      this.playIcon = window.playIcon;
      this.playGrayIcon = window.playGrayIcon;
    }

    if (this.props.shuffle) {
      this.shuffleIcon = window.shuffleLightNeonIcon;
      this.shuffleGrayIcon = window.shuffleNeonIcon;
    } else {
      this.shuffleIcon = window.shuffleIcon;
      this.shuffleGrayIcon = window.shuffleGrayIcon;
    }

    if (this.props.repeat && this.props.repeat !== 'once') {
      this.repeatIcon = window.repeatLightNeonIcon;
      this.repeatGrayIcon = window.repeatNeonIcon;
    } else if (this.props.repeat === 'once') {
      this.repeatIcon = window.repeatLightNeonOneIcon;
      this.repeatGrayIcon = window.repeatNeonOneIcon;
    } else {
      this.repeatIcon = window.repeatIcon;
      this.repeatGrayIcon = window.repeatGrayIcon;
    }

    if (this.props.songQueueClicked) {
      this.playlistIcon = window.playlistLightNeonIcon;
      this.playlistGrayIcon = window.playlistNeonIcon;
    } else {
      this.playlistIcon = window.playlistIcon;
      this.playlistGrayIcon = window.playlistGrayIcon;
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
                  <Link to={`/app/album/${albumId}`} className="cover-art-text">
                    <img src={albumCover}/>
                  </Link>
                </span>
                <div className="current-song-title">
                  <div className="current-song-title-top-line">
                    <Link to={`/app/album/${albumId}`} className="cover-art-text">
                      {songTitle}
                    </Link>
                  </div>
                  <div className="current-song-title-bottom-line">
                    <Link to={`/app/artist/${artistId ? artistId : ""}/overview`}>
                      {songArtist}
                    </Link>
                  </div>
                </div>
                <button className="current-song-heart-icon" onClick={this.handleLikeSongClick.bind(this)} onMouseEnter={this.handleMouseOver("mouseHeartOver")} onMouseLeave={this.handleMouseOver("mouseHeartOver")}>
                  <img src={this.state.mouseHeartOver ? (this.state.included ? window.heartFilledIcon : window.heartIcon) : (this.state.included ? window.heartFilledIcon : window.heartGrayIcon)} />
                </button>
              </div>
            </div>
            <div className="play-bar-center">
              <div className="player-controls-center">
                <div className="player-controls-buttons">
                  <button className="player-controls-shuffle-button" onClick={this.handleShuffle.bind(this)} onMouseEnter={this.handleMouseOver("mouseShuffleOver")} onMouseLeave={this.handleMouseOver("mouseShuffleOver")}>
                    <img src={this.state.mouseShuffleOver ? this.shuffleIcon : this.shuffleGrayIcon} />
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
                  <button className="player-controls-repeat-button" onClick={this.handleRepeat.bind(this)} onMouseEnter={this.handleMouseOver("mouseRepeatOver")} onMouseLeave={this.handleMouseOver("mouseRepeatOver")}>
                    <img src={this.state.mouseRepeatOver ? this.repeatIcon : this.repeatGrayIcon} />
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
                  <button className="queue-button" onClick={this.handleSongQueue.bind(this)} onMouseEnter={this.handleMouseOver("mouseQueueOver")} onMouseLeave={this.handleMouseOver("mouseQueueOver")}>
                    <img src={this.state.mouseQueueOver ? this.playlistIcon : this.playlistGrayIcon} />
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
