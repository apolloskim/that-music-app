import {
  RECEIVE_CURRENT_PLAYING_PAGE,
  RECEIVE_ALL_CURRENT_PLAYING_PAGES,
  REMOVE_ALL_CURRENT_PLAYING_PAGES
} from '../actions/session_actions';
import { merge } from 'lodash';

const currentPlayingPageReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYING_PAGE:
      const newState = merge([], state);
      newState.push({table_id: action.id, table: action.table, title: action.title});
      return newState;
    case RECEIVE_ALL_CURRENT_PLAYING_PAGES:
      return Object.values(action.visits);
    case REMOVE_ALL_CURRENT_PLAYING_PAGES:
      return [];
    default:
      return state;
  }
};

export default currentPlayingPageReducer;
