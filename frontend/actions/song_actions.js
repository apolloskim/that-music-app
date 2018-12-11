import * as SongApiUtil from '../util/song_api_utils';
import * as PlaylistSongApiUtil from '../util/playlist_song_api_utils';
import * as LikeSongApiUtil from '../util/like_song_api_utils';

import { receivePlaylist } from './playlist_actions';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_PLAY = "RECEIVE_PLAY";
export const RECEIVE_QUERIED_SONGS = "RECEIVE_QUERIED_SONGS";
export const RECEIVE_SONG_QUEUE = "RECEIVE_SONG_QUEUE";
export const RECEIVE_CLICKED_SONG_ID = "RECEIVE_CLICKED_SONG_ID";

export const createPlaylistSong = (playlist_id, song_id) => dispatch => {
  return PlaylistSongApiUtil.createPlaylistSong({playlist_id, song_id}).then( response => console.log(response), err => (dispatch(receiveErrors(err.responseJSON))) );
}

export const deletePlaylistSong = (id) => dispatch => {
  return PlaylistSongApiUtil.deletePlaylistSong(id).then( songs => dispatch(receivePlaylist(songs)));
}

export const createLikeSong = (user_id, song_id) => dispatch => {
  return LikeSongApiUtil.createLikeSong({user_id, song_id}).then( response => console.log(response), err => (dispatch(receiveErrors(err.responseJSON))) );
}

export const deleteLikeSong = (id) => dispatch => {
  return LikeSongApiUtil.deleteLikeSong(id).then( playlist => dispatch(receiveQueriedSongs(playlist)));
}

export const fetchLikeSongs = id => dispatch => {
  return LikeSongApiUtil.fetchLikeSongs(id).then( songs => dispatch(receiveQueriedSongs(songs)));
}


export const fetchCurrentSong = (userId, id) => dispatch => {
  return SongApiUtil.fetchCurrentSong(userId, id).then( song => dispatch(receiveCurrentSong(song)) );
};

export const searchSong = (str) => dispatch => {

  return SongApiUtil.searchSong(str).then(songs => {
    dispatch(receiveQueriedSongs(songs))
  });
};

export const receiveClickedSongId = (id, playlistSongId) => {
  return {
    type: RECEIVE_CLICKED_SONG_ID,
    id,
    playlistSongId
  };
};

export const receiveQueriedSongs = (songs) => {
  return {
    type: RECEIVE_QUERIED_SONGS,
    songs
  };
};

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  };
};

export const receivePlay = (playing, pause) => {
  return {
    type: RECEIVE_PLAY,
    playing,
    pause
  }
}

export const receiveSongQueue = (songQueue)=> {
  return {
    type: RECEIVE_SONG_QUEUE,
    songQueue
  }
}
