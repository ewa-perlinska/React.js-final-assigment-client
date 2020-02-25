import axios from "axios";

const baseUrl = "http://localhost:4000";

export const TICKETS_FETCHED = "TICKETS_FETCHED";

export function tickets(tickets) {
  return {
    type: TICKETS_FETCHED,
    payload: tickets
  };
}

export function loadTickets() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/ticket`);
      const { data } = response;

      const action = tickets(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}

export const ONE_EVENT_TICKETS_FETCHED = "ONE_EVENT_TICKETS_FETCHED";

export function ticketsOneEvent(tickets) {
  return {
    type: ONE_EVENT_TICKETS_FETCHED,
    payload: tickets
  };
}

export function loadOneEventTickets(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/ticket/${id}`);
      // const { data } = response;
      // const action = event(data);
      dispatch(ticketsOneEvent(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";

function createTicketSuccess(ticket) {
  return {
    type: TICKET_CREATE_SUCCESS,
    payload: {
      ticket: ticket
    }
  };
}

export const createTicket = (image, price, description, eventId) => {
  return async function(dispatch, getState) {
    console.log("what is in my state?", getState());

    const stateData = getState().auth.data;
    const token = stateData.token;
    const eventId = getState().events.selectedEvent.id;

    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/ticket/${eventId}`,
      eventId,
      headers: { authorization: `Bearer ${token}` },
      data: {
        image,
        price,
        description,
        eventId
      }
    });

    console.log(response);
    dispatch(createTicketSuccess(response.data));
  };
};
