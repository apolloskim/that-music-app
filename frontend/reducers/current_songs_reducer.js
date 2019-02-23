import { RECEIVE_CURRENT_SONG, RECEIVE_CURRENT_SONG_LIKED } from '../actions/song_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const currentSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
    return action.song;
    case RECEIVE_CURRENT_USER:
      return action.currentSong ? action.currentSong : {};
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CURRENT_SONG_LIKED:
      return Object.assign({}, state, {likeStatus: action.likeStatus});
    default:
      return state;
  }
};

export default currentSongsReducer;
