import { RECEIVE_CURRENT_USER, LOGOUT } from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case LOGOUT:
      return Object.assign({})
    default:
      return state;
  }
};