import { USER_CREATED } from "../actions/auth";

export default (state = { userCreated: false, data: null }, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };
    default:
      return state;
  }
};
