import React from 'react';
import {connect} from 'react-redux';
import {login, removeErrors} from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "log in"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
