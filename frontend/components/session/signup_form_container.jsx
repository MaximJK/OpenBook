import SessionForm from './session_form.jsx'
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import React from 'react';
const mapStateToProps = ({ errors }) => {
  debugger
  return {
    errors: errors.session,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    processForm: (user) => dispatch(signUp(user)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)