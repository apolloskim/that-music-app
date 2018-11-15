import React from 'react';
import {connect} from 'react-redux';
import {signup, removeErrors} from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "sign up"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
