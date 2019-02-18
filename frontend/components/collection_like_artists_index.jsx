import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLikeArtists } from '../actions/artist_actions';


class CollectionLikeArtists extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchLikeArtists(this.props.currentUserId);
  }

  render() {
    let renderArtists;
    if (this.props.artists) {
      renderArtists = (
        Object.values(this.props.artists).map( ( artist, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/artist/${artist.id ? artist.id : ""}/overview`} className="cover-art-text">
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

        <div className="browse-featured-content-wrapper">
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

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    artists: state.entities.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLikeArtists: id => dispatch(fetchLikeArtists(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionLikeArtists);
