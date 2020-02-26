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
    console.log("DO I HAVE MY EVENT ID?", getState().events.selectedEvent.id);
    const ticketId = getState().tickets.selectedTicket.id;
    console.log("do i have my ticket id ??????", ticketId);
    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/event/${eventId}/ticket/${ticketId}/comment`,
      ticketId,
      eventId,
      headers: { authorization: `Bearer ${token}` },
      data: {
        comment,
        ticketId,
        eventId
      }
    });

    console.log(response);
    dispatch(createCommentSuccess(response.data));
  };
};

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";

export function comments(comments) {
  return {
    type: COMMENTS_FETCHED,
    payload: comments
  };
}

export function loadComments(ticketId) {
  console.log("is this running ?");
  return async function(dispatch, getState) {
    try {
      console.log(
        "O CO CHODZI ???? ,do i have my event id",
        getState().events.selectedEvent
      );
      const eventId = getState().events.selectedEvent.id;
      const ticketId = getState().tickets.selectedTicket.id;

      console.log("CONSOLOS do i have my event id????", eventId);
      console.log("CONSOLOS do i have my TICKET id????", ticketId);
      const response = await axios.get(
        `${baseUrl}/event/${eventId}/ticket/${ticketId}/comment`
      );
      const { data } = response;
      console.log("what is my response here FROM COMMENTS?", response);

      const action = comments(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
