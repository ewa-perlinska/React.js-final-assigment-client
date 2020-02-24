import axios from "axios";

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

function createEventSuccess(event) {
  return {
    type: EVENT_CREATE_SUCCESS,
    payload: {
      event: event
    }
  };
}

export const createEvent = (title, date, imageUrl) => {
  return async function(dispatch, getState) {
    const token = getState().auth.data;

    console.log(title, date, imageUrl);
    dispatch({ type: "TESTING" });

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/events",
      headers: { authorization: `Bearer ${token}` },
      data: {
        title,
        date,
        imageUrl
      }
    });

    console.log(response);
    dispatch(createEventSuccess(response.data));
  };
};
