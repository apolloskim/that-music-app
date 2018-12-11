import React from 'react';
import {Link} from 'react-router-dom';


export default class ArtistIndex extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    let renderArtists;
    if (this.props.artists) {
      renderArtists = (
        Object.values(this.props.artists).map( ( artist, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <img className="artist-cover-image" src={artist.thumbImageUrl} />
                <div className="mo-info" >
                  <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`} className="cover-art-text">{artist.name}</Link>
                </div>
              </div>
            </div>
          );
        }
      ));
    };

    return (

        <div className="browse-featured-content-wrapper">
          <div className="browse-featured-header">
            <h1 className="browse-featured-header-new-releases">Recommended Artists</h1>
          </div>
          <div className="browse-featured-playlist-lists">
            <div className="container-fluid">
              <div className="album-index row">
                {renderArtists}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
