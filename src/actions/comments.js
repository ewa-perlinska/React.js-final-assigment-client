import axios from "axios";

const baseUrl = "http://localhost:4000";

export const COMMENT_CREATE_SUCCESS = " COMMENT_CREATE_SUCCESS";

function createCommentSuccess(comment) {
  return {
    type: COMMENT_CREATE_SUCCESS,
    payload: {
      ticket: comment
    }
  };
}

export const createComment = (comment, eventId) => {
  return async function(dispatch, getState) {
    console.log("what is in my state?", getState());

    const stateData = getState().auth.data;
    const token = stateData.token;
    const eventId = getState().events.selectedEvent.id;
    console.log("what is my ticket id?", getState().tickets.selectedTicket.id);
    const ticketId = getState().tickets.selectedTicket.id;
    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/ticket/${ticketId}/comment`,
      eventId,
      headers: { authorization: `Bearer ${token}` },
      data: {
        comment
      }
    });

    console.log(response);
    dispatch(createCommentSuccess(response.data));
  };
};
