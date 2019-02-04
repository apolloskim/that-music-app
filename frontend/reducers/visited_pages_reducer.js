import { RECEIVE_VISITED_ALBUM } from '../actions/album_actions';
import { RECEIVE_VISITED_ARTIST } from '../actions/artist_actions';
import { RECEIVE_VISITED_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const visitedPagesReducer = (state = [], action) => {

  Object.freeze(state);
  const newState = merge([], state);
  switch(action.type) {
    case RECEIVE_VISITED_ALBUM:
      newState.push(action.album);
      return newState;
    case RECEIVE_VISITED_ARTIST:
      newState.push(action.artist);
      return newState;
    case RECEIVE_VISITED_PLAYLIST:
      newState.push(action.playlist);
      return newState;

    default:
      return state;
  }
}

export default visitedPagesReducer;
