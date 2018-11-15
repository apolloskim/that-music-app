import {RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const defaultState = {
  currentUserId: null
};

const sessionReducers = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUserId: action.user.id});
    case LOGOUT_CURRENT_USER:
      let newState = merge({}, state);
      newState.currentUserId = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducers;
