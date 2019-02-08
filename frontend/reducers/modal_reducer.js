import {MODAL_OPEN, MODAL_CLOSE} from '../actions/modal_actions';


const modalReducer = (state = {}, action) => {

  Object.freeze(action);

  switch(action.type) {
    case MODAL_OPEN:
      return true;
    case MODAL_CLOSE:
      return false;
    default:
      return false;
  }
};

export default modalReducer;
