import React from 'react';
import {NavLink} from 'react-router-dom';

const CollectionPlaylistsHeader = () => {

  return (
    <nav className="active-feature-nav-header-container">
      <ul className="active-feature-nav-header-list">
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/collection/playlists'>playlists</NavLink>
        </li>
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/collection/tracks'>favorite songs</NavLink>
        </li>
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/collection/albums'>albums</NavLink>
        </li>
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/collection/artists'>artists</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CollectionPlaylistsHeader;
