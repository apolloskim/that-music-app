import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist, fetchArtists, fetchRelatedArtists } from '../../actions/artist_actions';
import {Link} from 'react-router-dom';

class ArtistRelated extends React.Component {

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
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
      <div className="browse-featured-playlist-lists">
        <div className="container-fluid">
          <div className="album-index row">
            <section className="related-artists">
              <div className="new-releases-content-spacing">
                {renderArtists}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, {match}) => {
  return {
    artists: Object.values(state.entities.artists).filter( artist => artist.id != match.params.artistId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistRelated);
