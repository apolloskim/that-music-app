import React from 'react';
import {NavLink} from 'react-router-dom';

const BrowseNavHeader = () => {

  return (
    <nav className="active-feature-nav-header-container">
      <ul className="active-feature-nav-header-list">
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/browse/featured'>featured</NavLink>
        </li>
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/browse/genres'>genres & moods</NavLink>
        </li>
        <li>
          <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/browse/newreleases'>new releases</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BrowseNavHeader;
