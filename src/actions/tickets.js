import axios from "axios";

const baseUrl = "http://localhost:4000";

export const TICKETS_FETCHED = "TICKETS_FETCHED";

export function tickets(tickets) {
  return {
    type: TICKETS_FETCHED,
    payload: tickets
  };
}

export function loadTickets(eventId) {
  console.log("is this running ?");
  return async function(dispatch, getState) {
    try {
      console.log("do i have my event id????", eventId);

      const response = await axios.get(`${baseUrl}/event/${eventId}`);
      const { data } = response;
      console.log("what is my response here?", response);

      const action = tickets(data);
      dispatch(action);
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

export const createTicket = (imageUrl, price, description, eventId) => {
  return async function(dispatch, getState) {
    console.log("what is in my state?", getState());

    const stateData = getState().auth.data;
    const token = stateData.token;
    const eventId = getState().events.selectedEvent.id;
    console.log(token);

    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/event/${eventId}/ticket`,
      eventId,
      headers: { authorization: `Bearer ${token}` },
      data: {
        imageUrl,
        price,
        description,
        eventId
      }
    });

    console.log(response);
    dispatch(createTicketSuccess(response.data));
  };
};

export const ONE_TICKET_SELECTED = "ONE_TICKET_SELECTED";

export function ticket(ticket) {
  return {
    type: ONE_TICKET_SELECTED,
    payload: ticket
  };
}

export function selectTicket(ticketId) {
  return async function(dispatch, getState) {
    try {
      console.log("DO I HAVE MY TICKET ID ??????????????", ticketId);
      const eventId = getState().events.selectedEvent.id;
      console.log("boze do i have event ID??????", eventId);
      const response = await axios.get(
        `${baseUrl}/event/${eventId}/ticket/${ticketId}`
      );
      console.log("DO I HAVE MY TICKET ID ??????????????", ticketId);
      console.log("do i have my response??????????????", response);
      dispatch(ticket(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";

export function ticketUpdateSuccess(ticket) {
  return {
    type: TICKET_UPDATE_SUCCESS,
    payload: ticket
  };
}

export function updateTicket(ticketId, formValues) {
  return async function(dispatch, getState) {
    try {
      const eventId = getState().events.selectedEvent.id;
      const response = await axios.patch(
        `${baseUrl}/event/${eventId}/ticket/${ticketId}`,
        formValues
      );
      dispatch(ticketUpdateSuccess(response.data));

      console.log("what is my ?", response.data);
    } catch (error) {
      throw error;
    }
  };
}
