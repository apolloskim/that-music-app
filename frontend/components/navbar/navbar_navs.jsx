import React from 'react';
import {Route, Link} from 'react-router-dom';

const NavbarNav = (props) => {

  return (
    <ul>
      <li className="navBar-group">
        <div className="navBar-item">
          <NavLink to="/search">
            <img src="" />
            <div>Search</div>
          </NavLink>
        </div>
      </li>
      <li className="navBar-group">
        <div className="navBar-item">
          <NavLink to="/browse/featured">
            <img src="" />
            <div>Home</div>
          </NavLink>
        </div>
      </li>
      <li className="navBar-group">
        <div className="navBar-item">
          <NavLink to="/collection/playlists">
            <img src="" />
            <div>Your Library</div>
          </NavLink>
        </div>
      </li>
    </ul>
  );
};

export default NavbarNav;
