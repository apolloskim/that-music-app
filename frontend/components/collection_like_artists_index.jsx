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
    if (Object.values(this.props.artists).length !== 0) {
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
    } else {
      renderArtists = (
        <section className="empty-state-message container-fluid empty">
          <div className="row">
            <div className="empty-state-message-margin">
              <div className="empty-state-icon-wrapper">
                <svg className="empty-state-icon" width="52" height="54" viewBox="0 0 52 54" xmlns="http://www.w3.org/2000/svg"><title>Add Artist Icon</title><path d="M35.71 34.12l-4.282-2.462c-.43-.247-.724-.668-.808-1.156-.085-.488.05-.984.373-1.36l3.486-4.088c2.212-2.585 3.43-5.886 3.43-9.293v-1.33c0-3.938-1.647-7.74-4.52-10.435C30.474 1.263 26.657-.102 22.66.16 15.176.646 9.31 7.114 9.31 14.887v.875c0 3.41 1.22 6.71 3.432 9.293l3.487 4.09c.32.375.456.87.372 1.36-.085.486-.38.908-.81 1.155l-8.547 4.914C2.775 39.112 0 43.878 0 49.012V53h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916c.946-.544 1.596-1.473 1.782-2.55.187-1.075-.113-2.168-.822-2.998l-3.488-4.09c-1.903-2.224-2.95-5.062-2.95-7.994v-.875c0-6.72 5.04-12.312 11.478-12.73 3.448-.218 6.725.95 9.23 3.3 2.51 2.35 3.89 5.538 3.89 8.975v1.33c0 2.932-1.047 5.77-2.95 7.995l-3.488 4.09c-.708.83-1.008 1.923-.822 3 .187 1.074.836 2.003 1.782 2.547l3.036 1.745c.706-.412 1.455-.755 2.243-1.018zM43 43v-9h-2v9h-9v2h9v9h2v-9h9v-2h-9z" fill="currentColor" fill-rule="evenodd"></path></svg>
              </div>
              <h1 className="empty-state-title">Your artists will appear here.</h1>
              <h4 className="empty-state-subtitle">Follow artists you love to add them to Your Library.
</h4>
              <Link className="white-button" to="/app/browse/newreleases">SEARCH</Link>
            </div>
          </div>
        </section>
      );
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
