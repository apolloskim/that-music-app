import { RECEIVE_CURRENT_SONG } from '../actions/song_actions';
import {merge} from 'lodash';

const currentSongsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      const songHistory = merge([], state);
      songHistory.push(action.song);
      if (songHistory.length > 5) {
        songHistory.shift();
      }
      return songHistory;
    default:
      return state;
  }
};

export default currentSongsReducer;
