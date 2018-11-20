import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducers';
import entitiesReducer from './entities_reducer';
import currentSongsReducer from './current_songs_reducer';
import playReducer from './play_pause_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  currentSong: currentSongsReducer,
  playStatus: playReducer
});

export default rootReducer;
