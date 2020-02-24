import { EVENT_CREATE_SUCCESS } from "../actions/events";

export default (state = [], action = {}) => {
  switch (action.type) {
    case EVENT_CREATE_SUCCESS:
      return [...state, action.payload.event];

    default:
      return state;
  }
};
