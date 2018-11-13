import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      let newState = merge([], state);
      newState.push(action.error);
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
