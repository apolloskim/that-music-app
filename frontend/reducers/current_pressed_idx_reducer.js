import { RECEIVE_CURRENT_PRESSED_IDX } from '../actions/session_actions';

const currentPressedIdxReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PRESSED_IDX:
      return action.idx
    default:
      return state;
  }
};

export default currentPressedIdxReducer;
