import { RECEIVE_CLICKED_SONG_ID } from '../actions/song_actions';

const clickedSongIdReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CLICKED_SONG_ID:
      return {id: action.id, playlistSongId: action.playlistSongId};
    default:
      return state;
  }
}

export default clickedSongIdReducer;
