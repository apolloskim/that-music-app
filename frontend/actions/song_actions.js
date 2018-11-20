import * as SongApiUtil from '../util/song_api_utils';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_PLAY = "RECEIVE_PLAY";

export const fetchCurrentSong = (userId, id) => {
  // debugger
  return SongApiUtil.fetchCurrentSong(userId, id).then( song => dispatch(receiveCurrentSong(song)) );
};

export const receiveCurrentSong = (song) => {
  // debugger
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
