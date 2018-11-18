import * as SongApiUtil from '../util/song_api_utils';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const fetchCurrentSong = (id) => {
  return SongApiUtil.fetchCurrentSong(id).then( song => receiveCurrentSong(song) );
};

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  };
};
