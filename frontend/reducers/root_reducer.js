import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducers';
import entitiesReducer from './entities_reducer';
import currentSongsReducer from './current_songs_reducer';
import playReducer from './play_pause_reducer';
import songQueueReducer from './song_queue_reducer';
import shuffleSongQueueReducer from './shuffle_song_queue_reducer';
import uiReducer from './ui_reducer';
import currentPlaylistsReducer from './current_playlists_reducer';
import clickedSongIdReducer from './clicked_song_id_reducer.js';
import currentPlayingPageReducer from './current_playing_page_reducer';
import visitedPagesReducer from './visited_pages_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  currentSong: currentSongsReducer,
  playStatus: playReducer,
  songQueue: songQueueReducer,
  shuffleSongQueue: shuffleSongQueueReducer,
  ui: uiReducer,
  currentPlaylists: currentPlaylistsReducer,
  clickedSongId: clickedSongIdReducer,
  currentPlayingPage: currentPlayingPageReducer,
  visitedPages: visitedPagesReducer
});

export default rootReducer;
