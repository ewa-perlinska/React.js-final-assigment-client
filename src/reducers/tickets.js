import {
  TICKET_CREATE_SUCCESS,
  TICKETS_FETCHED,
  ONE_TICKET_SELECTED,
  TICKET_UPDATE_SUCCESS
} from "../actions/tickets";

const initialState = {
  allTickets: [],
  createdTicket: {},
  selectedTicket: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TICKETS_FETCHED:
      return {
        ...state,
        allTickets: [...action.payload]
      };
    case TICKET_CREATE_SUCCESS:
      return {
        ...state,
        allTickets: [...state.allTickets, action.payload],
        createTicket: action.payload
      };
    case ONE_TICKET_SELECTED:
      return {
        ...state,
        selectedTicket: action.payload
      };
    case TICKET_UPDATE_SUCCESS:
      return { ...state, selectedTicket: action.payload };
    default:
      return state;
  }
}
