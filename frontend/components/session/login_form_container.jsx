import SessionForm from 'frontend/components/session/session_form.jsx';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';

mapStateToProps(state, ownProps)

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login'
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };

};
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)