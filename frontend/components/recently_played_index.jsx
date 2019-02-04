import React from 'react';
import { connect } from 'react-redux';
import { fetchVisitedAlbum } from '../actions/album_actions';
import { fetchVisitedArtist } from '../actions/artist_actions';
import { fetchVisitedPlaylist } from '../actions/playlist_actions';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class RecentlyPlayedIndex extends React.Component {

  handleReverse(arr) {
    let newArr = [];
    let playingPage = merge([], arr);
    playingPage.forEach(p => newArr.unshift(p));

    return newArr;
  }

  handleUnique(numArr, objArr) {
    const newArr = [];
    let count = 0;

    while(count < numArr.length) {
      for(let i = 0; i < objArr.length; i++) {
        if (numArr[count] === objArr[i].table_id) {
          newArr.push(objArr[i]);
          count++;
        }
      }
    }
    return newArr;
  }

  render() {
    let currentPlayingArr = this.handleReverse(this.props.currentPlayingPage);
    let numArr = currentPlayingArr.map(p => p.table_id);
    numArr = [...new Set(numArr)];

    currentPlayingArr = this.handleUnique(numArr, currentPlayingArr);

    let tableIdx = currentPlayingArr.slice(0, 12).map((table, idx) => {

      let tableLink;
      if (table.table === 'artist') {
        tableLink = `/app/artist/${table.table_id ? table.table_id : ""}/overview`;
      } else if (table.table === 'album') {
        tableLink = `/app/album/${table.table_id ? table.table_id : ""}`;
      } else {
        tableLink = `/app/playlist/${table.table_id ? table.table_id : ""}`;
      }

      let imageUrl;
      if (table.playlistImage.length !== 0) {
        imageUrl = table.playlistImage;
      } else if (table.albumImage.length !== 0) {
        imageUrl = table.albumImage;
      } else if (table.artistImage.length !== 0) {
        imageUrl = table.artistImage;
      }

      return (
        <div key={idx} className="cover-container">
          <div key={idx} className="browse-featured-playlist">
            <Link to={tableLink}>
              <img className={table.table === 'artist' ? "artist-cover-image" : ""} src={imageUrl} />
            </Link>
            <div className="mo-info" >
              <Link to={tableLink} className="cover-art-text">{table.title}</Link>
            </div>
          </div>
        </div>
      );
    });


    return(
      <div className="browse-featured-content-wrapper">
        <div className="browse-featured-header">
          <h1 className="browse-featured-header-new-releases">Recently Played</h1>
        </div>
        <div className="browse-featured-playlist-lists">
          <div className="container-fluid">
            <div className="album-index row">
              {tableIdx}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    currentPlayingPage: state.currentPlayingPage,
    visitedPages: state.visitedPages
  };
};

const mdp = dispatch => {
  return {
    fetchVisitedAlbum: id => dispatch(fetchVisitedAlbum(id)),
    fetchVisitedArtist: id => dispatch(fetchVisitedArtist(id)),
    fetchVisitedPlaylist: id => dispatch(fetchVisitedPlaylist(id))
  }
}

export default connect(msp, mdp)(RecentlyPlayedIndex);
