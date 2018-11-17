import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import songsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer
});

export default entitiesReducer;
