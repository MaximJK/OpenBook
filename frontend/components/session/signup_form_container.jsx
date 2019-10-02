import SessionForm from 'frontend/components/session/session_form.jsx'
import { connect } from 'react-redux';
import { signup } from '/Users/aa/Downloads/W8D1-solo/W7D5-master/frontend/actions/session_actions.js';
import React from 'react';
const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)