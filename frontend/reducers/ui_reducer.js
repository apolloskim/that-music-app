import {combineReducers} from 'redux';
import dropdownReducer from './dropdown_reducer';

const uiReducer = combineReducers({
  dropdownPressed: dropdownReducer
});

export default uiReducer;
