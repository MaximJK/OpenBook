import { RECEIVE_CURRENT_USER, LOGOUT } from "../actions/session_actions" 

const _nullUser = {
  id: null
};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  const { id } = action.currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id });
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};