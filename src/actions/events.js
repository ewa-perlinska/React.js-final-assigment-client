import axios from "axios";

const baseUrl = "http://localhost:4000";

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
      url: "http://localhost:4000/events",
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
