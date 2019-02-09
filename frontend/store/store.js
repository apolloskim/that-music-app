import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { merge } from 'lodash'

const configureStore = (preloadedState = {}) => {
  // let newpreloadedState;
  // if (preloadedState.currentSong) {
  const  newpreloadedState = merge({}, preloadedState, {currentSong: rootReducer.currentSong});
  // } else {
  //   newpreloadedState = merge({}, preloadedState);
  // }
  return createStore(rootReducer, newpreloadedState, applyMiddleware(thunk));
};

export default configureStore;
