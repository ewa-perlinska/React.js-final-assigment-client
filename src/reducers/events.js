import { EVENT_CREATE_SUCCESS, EVENTS_FETCHED } from "../actions/events";

const initialState = {
  allEvents: [],
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
        selectedEvent: action.payload
      };
    default:
      return state;
  }
}
