import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';

export default class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  render() {
    let renderSongs;
    if (this.props.songs) {
      renderSongs = Object.values(this.props.songs).map( (song, idx) => {
        return (
          <div key={idx}>
            <h1>{ song.title }</h1>
          </div>
        );
      });
    }

    return (
      <div className="playlist-show-container">
        <Navbar />
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
                        <div className="playlist-title">
                          <span>{this.props.playlist ? this.props.playlist.title : ""}</span>
                        </div>
                      </div>
                      <div className="spotify-small-text">
                        <span>spotify</span>
                      </div>
                    </div>
                    <div className="track-list-header-play-button-top">
                      <button className="track-list-header-play-button">PLAY</button>
                    </div>
                    <div className="track-list-header-body">
                      <p className="track-list-count">{`${this.props.playlist ? this.props.playlist.songCount : ""} songs`}</p>
                      <div className="track-list-header-body-children">
                        <div className="track-list-header-body-extra-buttons">
                          <button className="track-list-header-body-extra-buttons-body">
                            <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                          </button>
                          <button className="track-list-header-body-extra-buttons-body">
                            <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                          </button>
                        </div>
                      </div>
                    </div>
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
