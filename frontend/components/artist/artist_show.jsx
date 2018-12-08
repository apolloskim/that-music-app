import React from 'react';

export default class ArtistShow extends React.Component {

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
    const artistHeader = {
      backgroundImage: `url(${this.props.artist ? this.props.artist.coverImageUrl : ""})`
    };

    return (
      <div className="browse-newreleases-container">
        <div className="artist-show-main-content">
          <section className="content artist">
            <header className="artist-header" style={artistHeader}>
              <span className="monthly-listeners">100,000 monthly listeners</span>
              <h1 className="large">{this.props.artist ? this.props.artist.name : ''}</h1>
              <div className="header-buttons">
                <button className="input-btn input-box-button-green btn-margin-right">PLAY</button>
                  <button className="artist-show-heart-button">
                    <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                  </button>
                  <button className="artist-show-heart-button">
                    <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                  </button>
              </div>
            </header>
          </section>
        </div>
      </div>
    );
  }
}
