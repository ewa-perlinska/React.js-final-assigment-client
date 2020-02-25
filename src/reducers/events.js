import {
  EVENT_CREATE_SUCCESS,
  EVENTS_FETCHED,
  ONE_EVENT_SELECTED
} from "../actions/events";

const initialState = {
  allEvents: [],
  createdEvent: {},
  selectedEvent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return {
        ...state,
        allEvents: [...action.payload]
      };
    case EVENT_CREATE_SUCCESS:
      return {
        ...state,
        allEvents: [...state.allEvents, action.payload],
        createdEvent: action.payload
      };
    case ONE_EVENT_SELECTED:
      return {
        ...state,
        selectedEvent: action.payload
      };

    default:
      return state;
  }
}
