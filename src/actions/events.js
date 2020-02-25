import axios from "axios";

const baseUrl = "http://localhost:4000";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

export function events(events) {
  return {
    type: EVENTS_FETCHED,
    payload: events
  };
}

export function loadEvents() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/event`);
      const { data } = response;

      const action = events(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
export const ONE_EVENT_SELECTED = "ONE_EVENT_SELECTED";

export function event(event) {
  return {
    type: ONE_EVENT_SELECTED,
    payload: event
  };
}

export function selectEvent(id) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.get(`${baseUrl}/event/${id}`);
      console.log("do i have my response?", response);
      dispatch(event(response.data));
    } catch (error) {
      throw error;
    }
  };
}

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

function createEventSuccess(event) {
  return {
    type: EVENT_CREATE_SUCCESS,
    payload: {
      event: event
    }
  };
}

export const createEvent = (title, image, date, description) => {
  return async function(dispatch, getState) {
    const stateData = getState().auth.data;
    const token = stateData.token;

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/event",
      headers: { authorization: `Bearer ${token}` },
      data: {
        title,
        image,
        date,
        description
      }
    });

    console.log(response);
    dispatch(createEventSuccess(response.data));
  };
};
