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
      console.log("do i have my event id", getState().events.selectedEvent);
      const eventId = getState().events.selectedEvent.id;
      console.log("do i have my event id????", eventId);
      const response = await axios.get(`${baseUrl}/events/${eventId}/ticket`);
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

//export const ONE_EVENT_TICKETS_FETCHED = "ONE_EVENT_TICKETS_FETCHED";

// export function ticketsOneEvent(tickets) {
//   return {
//     type: ONE_EVENT_TICKETS_FETCHED,
//     payload: tickets
//   };
// }

// export function loadOneEventTickets() {
//   return async function(dispatch, getState) {
//     try {
//       const response = await axios.get(`${baseUrl}/ticket`);
//       // const { data } = response;
//       // const action = event(data);
//       dispatch(ticketsOneEvent(response.data));
//     } catch (error) {
//       throw error;
//     }
//   };
// }
