import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { merge } from 'lodash'

const configureStore = (preloadedState = {}) => {
  // debugger
  let newpreloadedState;
  if (!preloadedState.currentSong) {
    newpreloadedState = merge({}, preloadedState, {currentSong: rootReducer.currentSong});
  } else {
    newpreloadedState = merge({}, preloadedState);
  }
  // debugger
  return createStore(rootReducer, newpreloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;
