import { TICKET_CREATE_SUCCESS, TICKETS_FETCHED } from "../actions/tickets";

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
    default:
      return state;
  }
}
