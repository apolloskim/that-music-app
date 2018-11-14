import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_SESSION_ERRORS} from '../actions/session_actions';
import {merge} from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      // const newState = merge([], state);
      // newState.push(action.error);
      // return newState;
      return action.error;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
