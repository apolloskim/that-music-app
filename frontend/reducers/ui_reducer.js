import {combineReducers} from 'redux';
import dropdownReducer from './dropdown_reducer';
import currentPressedIdxReducer from './current_pressed_idx_reducer';
import modalReducer from './modal_reducer';


const uiReducer = combineReducers({
  dropdownPressed: dropdownReducer,
  currentIdx: currentPressedIdxReducer,
  modal: modalReducer
});

export default uiReducer;
