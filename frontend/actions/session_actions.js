import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_PLAYING_PAGE = 'RECEIVE_CURRENT_PLAYING_PAGE';
export const RECEIVE_ALL_CURRENT_PLAYING_PAGES = 'RECEIVE_ALL_CURRENT_PLAYING_PAGES';
export const REMOVE_ALL_CURRENT_PLAYING_PAGES = 'REMOVE_ALL_CURRENT_PLAYING_PAGES';
export const RECEIVE_CURRENT_PRESSED_IDX = 'RECEIVE_CURRENT_PRESSED_IDX';

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then((user)=> dispatch(receiveCurrentUser(user)),
err => (dispatch(receiveErrors(err.responseJSON))) );
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
err => (dispatch(receiveErrors(err.responseJSON))) );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));
};

export const createCurrentlyVisited = (user_id, table_id, table, title, playlistImage, artistImage, albumImage) => dispatch => {
  return SessionApiUtil.createCurrentlyVisited(user_id, table_id, table, title, playlistImage, artistImage, albumImage).then(visits => dispatch(receiveAllCurrentPlayingPages(visits)))
};


export const fetchCurrentlyVisited = id => dispatch => {
  return SessionApiUtil.fetchCurrentlyVisited(id).then(visits => dispatch(receiveAllCurrentPlayingPages(visits)))
}

export const receiveAllCurrentPlayingPages = visits => {
  return {
    type: RECEIVE_ALL_CURRENT_PLAYING_PAGES,
    visits
  };
};

export const removeAllCurrentPlayingPages = () => {
  return {
    type: REMOVE_ALL_CURRENT_PLAYING_PAGES
  };
};

export const receiveCurrentPlayingPage = (id, table, title) => {
  return {
    type: RECEIVE_CURRENT_PLAYING_PAGE,
    id,
    table,
    title
  };
};

export const receiveCurrentPressedIdx = idx => {
  return {
    type: RECEIVE_CURRENT_PRESSED_IDX,
    idx
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (error) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    error
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};

export const receiveCurrentUser = (user)=> {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    currentSong: user.currentSong,
    playlists: user.playlists
  };
};
