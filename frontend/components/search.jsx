import React from 'react';
import Navbar from './navbar/navbar';
import PlaybarContainer from './playbar-container';
import { connect } from 'react-redux';
import { searchSong, fetchCurrentSong, receivePlay } from '../actions/song_actions';
import { fetchArtists } from '../actions/artist_actions';
import { fetchAlbums } from '../actions/album_actions';
import { fetchPlaylists, fetchCurrentPlaylists } from '../actions/playlist_actions';
import { Link, NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom'
import SearchResultsContainer from './search_results';
import SearchArtistsContainer from './search_artists';
import SearchSongsContainer from './search_songs';
import SearchPlaylistsContainer from './search_playlists';
import SearchAlbumsContainer from './search_albums';
import Modal from './modal';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  componentDidMount() {
    this.props.fetchCurrentPlaylists(this.props.currentUserId);
  }

  handleSearch(e) {
    this.setState({searchString: e.currentTarget.value});
    if (e.currentTarget.value !== '') {
      this.props.searchSong(e.currentTarget.value, null);
      this.props.fetchArtists(e.currentTarget.value);
      this.props.fetchAlbums(e.currentTarget.value);
      this.props.fetchPlaylists(e.currentTarget.value);
    }
  }


  render() {
    let links;

    if (this.state.searchString !== "") {
      links = (
        <nav className="artist-show-link-nav">
          <ul className="artist-show-link-list">
            <li className="artist-show-link">
              <div>
                <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/search/results`}>TOP RESULTS</NavLink>
              </div>
            </li>
            <li className="artist-show-link">
              <div>
                <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/search/artists`}>ARTISTS</NavLink>
              </div>
            </li>
            <li className="artist-show-link">
              <div>
                <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/search/songs`}>SONGS</NavLink>
              </div>
            </li>
            <li className="artist-show-link">
              <div>
                <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/search/albums`}>ALBUMS</NavLink>
              </div>
            </li>
            <li className="artist-show-link">
              <div>
                <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/search/playlists`}>PLAYLISTS</NavLink>
              </div>
            </li>
          </ul>
        </nav>
      );
    } else {
      links = (
        <section className="empty-state-message container-fluid empty">
          <div className="row">
            <div className="empty-state-message-margin">
              <h1 className="empty-search-title">Search That Music App</h1>
              <h4 className="empty-search-subtitle">Find your favorite songs, artists, albums, podcasts and playlists.</h4>
            </div>
          </div>
        </section>
      );
    }

    return (
      <div className="search-main-view">
        <div>
          <section className="search">
            <Modal />
            <div className="search-input-box">
              <div className="search-content-spacing">
                <input type="text" onChange={this.handleSearch.bind(this)} className="search-input-box-input" placeholder="Start typing..." />
              </div>
            </div>
            <div className="search-content">
              {links}
              <Route path={`/app/search/results`} render={(props) => <SearchResultsContainer {...props} queries={this.state.searchString} />} />
              <Route path={`/app/search/artists`} render={(props) => <SearchArtistsContainer {...props} queries={this.state.searchString} />} />
              <Route path={`/app/search/songs`} render={(props) => <SearchSongsContainer {...props} queries={this.state.searchString} />} />
              <Route path={`/app/search/albums`} render={(props) => <SearchAlbumsContainer {...props} queries={this.state.searchString} />} />
              <Route path={`/app/search/playlists`} render={(props) => <SearchPlaylistsContainer {...props} queries={this.state.searchString} />} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.entities.songs,
    currentSong: state.currentSong,
    currentUserId: state.session.currentUserId,
    playing: state.playStatus.playing,
    pause: state.playStatus.pause,
    modalOpen: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchSong: (str, queue) => {
      dispatch(searchSong(str, queue))
    },
    fetchCurrentSong: (userId, id) => dispatch(fetchCurrentSong(userId, id)),
    receivePlay: (playing, pause, requestedSong) => dispatch(receivePlay(playing, pause, requestedSong)),
    fetchArtists: queries => dispatch(fetchArtists(queries)),
    fetchAlbums: queries => dispatch(fetchAlbums(queries)),
    fetchCurrentPlaylists: id => dispatch(fetchCurrentPlaylists(id)),
    fetchPlaylists: queries => dispatch(fetchPlaylists(queries))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
