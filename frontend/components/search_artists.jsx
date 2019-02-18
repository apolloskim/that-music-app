import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class SearchArtists extends React.Component {

  render() {

    let renderArtists;
    if (this.props.artists) {
      renderArtists = (
        Object.values(this.props.artists).map( ( artist, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`}>
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
    };

    return (
      <div className="search-content-spacing">
        <div className="container-fluid margin-auto">
          <div className="browse-featured-content-wrapper">
            <div className="browse-featured-playlist-lists">
              <div className="container-fluid">
                <div className="album-index row">
                  {renderArtists}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.entities.artists,
    queries: ownProps.queries
  };
};


export default connect(mapStateToProps)(SearchArtists);
