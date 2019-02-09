import React from 'react';
import { NavLink } from 'react-router-dom';
import ArtistOverviewContainer from './artist_show_overview';
import ArtistRelatedContainer from './artist_show_related_artists';
import {ProtectedRoute} from '../../util/route_util';
import { ContextMenu, MenuItem, ContextMenuTrigger, handleContextClick } from 'react-contextmenu';
import { receiveCurrentPlayingPage } from '../../actions/session_actions';


export default class ArtistShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      included: this.props.currentUser.likeArtistIds.includes(parseInt(this.props.artistId)),
      prevId: null
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  toggleMenu(e) {
    if(this.toggle) {
      this.toggle.handleContextClick(e);
    }
  }

  handleClick(song) {
    let that = this;
    return (e) => {
      this.handlePlay(song);
    };
  }

  handlePlay(song) {
    if (this.props.playing) {
      this.props.receivePlay(false, true);
    }

    if (!this.props.currentSong.song || song.id !== this.props.currentSong.song.id) {
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(true, false);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.artistId, 'artist', this.props.artist.name, null, this.props.artist.thumbImageUrl, null);
    } else if (this.props.currentPlayingPage.length === 0){
      this.props.receivePlay(true, false);
      if (this.props.songQueue[0] !== Object.values(this.props.songs)[0]) {
        this.props.receiveSongQueue(Object.values(this.props.songs).map(song => song.id));
      }
      this.props.createCurrentlyVisited(this.props.currentUserId, this.props.artistId, 'artist', this.props.artist.name, null, this.props.artist.thumbImageUrl, null);
    } else {
      this.props.receivePlay(true, false);
    }
  }


  handleButtonClick() {
    let currentPlayingTable;
    let currentPlayingId;

    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }

    if (currentPlayingTable && currentPlayingTable === 'artist' && currentPlayingId && currentPlayingId === this.props.artistId) {
      this.handlePlay(this.props.currentSong.song);
    } else {
      this.handlePlay(Object.values(this.props.songs)[0]);
    }
  }


  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
    this.setState({prevId: this.props.artistId});
    // debugger
  }

  componentDidUpdate() {
    if (this.props.artistId !== this.state.prevId) {
      this.props.fetchArtist(this.props.artistId);
      this.setState({prevId: this.props.artistId});
    }
  }

  handleHeartClick() {

    if (this.state.included) {
      let likeArtistId = this.props.currentUser.likeArtists.filter(artist => artist.artist_id === parseInt(this.props.artistId))[0].id
      this.props.deleteLikeArtist(likeArtistId).then( () => this.setState({included: !this.state.included}));
    } else {
      this.props.createLikeArtist(this.props.currentUserId, this.props.artistId).then( () => this.setState({included: !this.state.included}));
    }

  }

  handleMenuClick(e, data) {
    if (this.state.included) {
      let likeArtistId = this.props.currentUser.likeArtists.filter(artist => artist.artist_id === parseInt(this.props.artistId))[0].id
      this.props.deleteLikeArtist(likeArtistId).then( () => this.setState({included: !this.state.included}));
    } else {
      this.props.createLikeArtist(this.props.currentUserId, this.props.artistId).then( () => this.setState({included: !this.state.included}));
    }
  }


  render() {
    let currentPlayingTable;
    let currentPlayingId;

    if (this.props.currentPlayingPage.length !== 0) {
      currentPlayingTable = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table;
      currentPlayingId = this.props.currentPlayingPage[this.props.currentPlayingPage.length - 1].table_id;
    }


    let artistHeader;
    if (this.props.artist) {
      artistHeader = {
        backgroundImage: `url(${this.props.artist.coverImageUrl})`
      };
    };
    return (
      <div className="browse-newreleases-container">
        <div className="artist-show-main-content">
          <section className="content artist">
            <header className="artist-header" style={artistHeader}>
              <span className="monthly-listeners">100,000 monthly listeners</span>
              <h1 className="large">{this.props.artist ? this.props.artist.name : ''}</h1>
              <div className="header-buttons">
                <button onClick={this.handleButtonClick} className="input-btn input-box-button-green btn-margin-right">{currentPlayingTable && currentPlayingId && currentPlayingTable === 'artist' && currentPlayingId.toString() === this.props.artistId ? (this.props.playing ? 'PAUSE' : 'PLAY') : 'PLAY'}</button>
                  <button className="artist-show-heart-button" onClick={this.handleHeartClick.bind(this)}>
                    <img className="track-list-header-body-heart-icon" src={this.state.included ? window.heartFilledIcon : window.heartIcon}/>
                  </button>
                  <button className="artist-show-heart-button">
                    <ContextMenuTrigger id="one" ref={c => this.toggle = c}>
                      <img className="track-list-header-body-dots-icon" onClick={this.toggleMenu.bind(this)} src={window.threeDotsIcon}/>
                    </ContextMenuTrigger>
                  </button>
                  <ContextMenu id="one">
                    <MenuItem data={{foo: 'hey, it worked lol'}} onClick={this.handleMenuClick}>
                      {!this.state.included ? "Save to Your Library" : "Remove from Your Library"}
                    </MenuItem>
                  </ContextMenu>


              </div>
              <nav className="artist-show-link-nav">
                <ul className="artist-show-link-list">
                  <li className="artist-show-link">
                    <div>
                      <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/artist/${this.props.artistId ? this.props.artistId : ""}/overview`}>OVERVIEW</NavLink>
                    </div>
                  </li>
                  <li className="artist-show-link">
                    <div>
                      <NavLink className="nav-link-spacing" active="artist-nav-active" to={`/app/artist/${this.props.artistId ? this.props.artistId : ""}/related`}>RELATED ARTISTS</NavLink>
                    </div>
                  </li>
                </ul>
              </nav>
            </header>
            <ProtectedRoute path={`/app/artist/:artistId/overview`} component={ArtistOverviewContainer} />
            <ProtectedRoute path={`/app/artist/:artistId/related`} component={ArtistRelatedContainer} />
          </section>
        </div>
      </div>
    );
  }
}
