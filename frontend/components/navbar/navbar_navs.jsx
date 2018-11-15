import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';
import UserInfoContainer from './user_info_container';

const NavbarNav = (props) => {

  return (
    <div className="navBar-expand">
      <div className="navBar-header">
        <img src={window.spotifyWhite} />
        <div className="navBar-header-logo-text">
          That music app
        </div>
      </div>
      <ul>
        <li className="navBar-group">
          <div className="navBar-item link-subtle">
            <NavLink to="/search" activeClassName="active-nav-link" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path></svg>
              <div className="nav-text">Search</div>
            </NavLink>
          </div>
        </li>
        <li className="navBar-group">
          <div className="navBar-item">
            <NavLink to="/browse/featured" activeClassName="active-nav-link" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
              <div className="nav-text">Home</div>
            </NavLink>
          </div>
        </li>
        <li className="navBar-group">
          <div className="navBar-item link-subtle">
            <NavLink to="/collection/playlists" activeClassName="active-nav-link" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>
              <div className="nav-text">Your Library</div>
            </NavLink>
          </div>
        </li>
      </ul>
      <div className="session-info">
        <NavLink to="/settings/account" activeClassName="active-nav-link" className="session-info-container">
          <svg viewBox="0 0 80 90" width="28" height="28" xmlns="http://www.w3.org/2000/svg"><path d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z" fill="currentColor" fillRule="evenodd"></path>
        </svg>
          <UserInfoContainer />
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarNav;
