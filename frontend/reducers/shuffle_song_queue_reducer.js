import { RECEIVE_SHUFFLE_SONG_QUEUE } from '../actions/song_actions';


const shuffleSongQueueReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SHUFFLE_SONG_QUEUE:
      return action.songQueue;
    default:
      return state;
  };
};

export default shuffleSongQueueReducer;
