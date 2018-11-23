import { RECEIVE_SONG_QUEUE } from '../actions/song_actions';


const songQueueReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONG_QUEUE:
      return action.songQueue;
    default:
      return state;
  };
};

export default songQueueReducer;
