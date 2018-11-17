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
                <img className="playlist-cover-img" src={this.props.playlist ? this.props.playlist.imageUrl : ""} />
              </div>
              // {renderSongs}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
