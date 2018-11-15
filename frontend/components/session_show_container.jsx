import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';
import SessionShow from './session_show';


const msp = state => {
  let currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId],
    loggedIn: Boolean(currentUserId)
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(SessionShow);
