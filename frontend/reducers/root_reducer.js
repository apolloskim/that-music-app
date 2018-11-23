import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducers';
import entitiesReducer from './entities_reducer';
import currentSongsReducer from './current_songs_reducer';
import playReducer from './play_pause_reducer';
import songQueueReducer from './song_queue_reducer';
import uiReducer from './ui_reducer';
import currentPlaylistsReducer from './current_playlists_reducer';
import clickedSongIdReducer from './clicked_song_id_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  currentSong: currentSongsReducer,
  playStatus: playReducer,
  songQueue: songQueueReducer,
  ui: uiReducer,
  currentPlaylists: currentPlaylistsReducer,
  clickedSongId: clickedSongIdReducer
});

export default rootReducer;
