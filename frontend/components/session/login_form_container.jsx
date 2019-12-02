import SessionForm from './session_form.jsx';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
const mapStateToProps = ({ errors }) => {
    
  return {
    errors: errors.session,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };

};
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)