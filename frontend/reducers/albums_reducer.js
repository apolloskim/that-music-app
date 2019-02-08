import { RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { merge } from 'lodash';

const albumsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album});
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ARTIST:
      return action.albums;
    case REMOVE_ALBUMS:
      return {};
    default:
      return state;
  }
};

export default albumsReducer;
