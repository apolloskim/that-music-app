import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import UserInfo from './user_info';


const msp = state => {
  let currentUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currentUserId]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(UserInfo);
