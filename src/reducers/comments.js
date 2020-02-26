import { COMMENT_CREATE_SUCCESS, COMMENTS_FETCHED } from "../actions/comments";

const initialState = {
  allComments: [],
  createdComment: {},
  selectedCommentsForOneTicket: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return {
        ...state,
        selectedCommentsForOneTicket: [...action.payload]
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        allComments: [...state.allComments, action.payload],
        createdComment: action.payload
      };
    default:
      return state;
  }
}
