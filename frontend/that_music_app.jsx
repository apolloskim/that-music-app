import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import {fetchPlaylist, createPlaylist} from "./actions/playlist_actions";

document.addEventListener("DOMContentLoaded", () => {

  let store;
  let songQueueArr = window.currentSong && window.currentSong.song ? [window.currentSong.song.id] : [];
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id },
      currentSong: window.currentSong,
      playStatus: { playing: false, pause: true },
      songQueue: songQueueArr,
      currentPlayingPage: Object.values(window.recentlyVisited)
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  window.createPlaylist = createPlaylist;
  window.fetchPlaylist = fetchPlaylist;
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
