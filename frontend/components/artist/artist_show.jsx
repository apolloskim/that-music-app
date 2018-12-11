import React from 'react';
import { NavLink } from 'react-router-dom';
import ArtistOverviewContainer from './artist_show_overview';
import ArtistRelatedContainer from './artist_show_related_artists';
import {ProtectedRoute} from '../../util/route_util';


export default class ArtistShow extends React.Component {

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
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
                <button className="input-btn input-box-button-green btn-margin-right">PLAY</button>
                  <button className="artist-show-heart-button">
                    <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                  </button>
                  <button className="artist-show-heart-button">
                    <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                  </button>
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
