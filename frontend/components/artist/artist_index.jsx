import React from 'react';
import {Link} from 'react-router-dom';


export default class ArtistIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      componentMounted: false
    };
  }

  componentDidMount() {
    this.props.fetchArtists();
    this.setState({componentMounted: true});
    // this.props.artistMounted = true;
  }

  componentWillUnmount() {
    this.props.removeArtists();
  }

  render() {
    let renderArtists;
    if (this.props.artists) {
      renderArtists = (
        Object.values(this.props.artists).map( ( artist, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/artist/${artist.id}/overview`}>
                  <img className="artist-cover-image" src={artist.thumbImageUrl} />
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`} className="cover-art-text">{artist.name}</Link>
                </div>
              </div>
            </div>
          );
        }
      ));
    }

    const artistIndexDom = (

      <div className="browse-featured-content-wrapper">
        <div className="browse-featured-header">
          <h1 className="browse-featured-header-new-releases">{Object.keys(this.props.artists).length > 0 ? "Recommended Artists" : ""}</h1>
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

    return (
      <div>
        {this.state.componentMounted ? artistIndexDom : ""}
      </div>
    );
  }
}
