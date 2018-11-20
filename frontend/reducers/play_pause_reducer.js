import { RECEIVE_PLAY } from '../actions/song_actions';

const playReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAY:
      return Object.assign({}, state, {playing: action.playing, pause: action.pause});
    default:
      return state;
  }
};

export default playReducer;
