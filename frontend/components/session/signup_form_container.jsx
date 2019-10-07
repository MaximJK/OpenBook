import SignUpForm from './signup_form.jsx'
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import React from 'react';

const mapStateToProps = state => {

  return {
    // errors: errors.session,
    // formType: 'signup'
  }
}

const mapDispatchToProps = dispatch => {

  return {
    processForm: (user) => dispatch(signUp(user)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)