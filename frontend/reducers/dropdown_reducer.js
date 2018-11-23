import { RECEIVE_DROPDOWN_CONTROL } from '../actions/dropdown_actions';

const dropdownReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DROPDOWN_CONTROL:
      return action.buttonPressed;
    default:
      return state;
  }
}

export default dropdownReducer;
