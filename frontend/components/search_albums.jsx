import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchAlbums extends React.Component {

  render() {
    let renderAlbums;
    if (Object.values(this.props.albums).length !== 0) {
      renderAlbums = (
        Object.values(this.props.albums).map( ( album, idx ) => {
          return (
            <div key={idx} className="cover-container">
              <div key={idx} className="browse-featured-playlist">
                <Link to={`/app/album/${album.id}`}>
                  <img src={album.imageUrl} />
                </Link>
                <div className="mo-info" >
                  <Link to={`/app/album/${album.id}`} className="cover-art-text">{album.title}</Link>
                  <div className="ellipsis-one-line">
                    <span>
                      {album.artistName}
                    </span>
                  </div>
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
            <div className="browse-featured-playlist-lists playlist-top-margin">
              <div className="container-fluid">
                <div className="album-index row">
                  {renderAlbums}
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
    albums: state.entities.albums,
    queries: ownProps.queries
  };
};


export default connect(mapStateToProps)(SearchAlbums);
