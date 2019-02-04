import { RECEIVE_ARTIST, RECEIVE_ARTISTS, REMOVE_ARTISTS } from '../actions/artist_actions';
import { merge } from 'lodash';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, {[action.artist.id]: action.artist});
    case RECEIVE_ARTISTS:
      return action.artists;
    case REMOVE_ARTISTS:
      return {};
    default:
      return state;
  }
};

export default artistsReducer;
