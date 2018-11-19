import { RECEIVE_CURRENT_SONG } from '../actions/song_actions';

const currentSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return action.song;
    default:
      return state;
  }
};

export default currentSongsReducer;
