import { RECEIVE_CURRENT_SONG } from '../actions/song_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const currentSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
    case RECEIVE_CURRENT_USER:
      return action.song;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default currentSongsReducer;
