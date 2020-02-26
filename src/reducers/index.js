import { combineReducers } from "redux";
import auth from "./auth";
import eventsReducer from "./events";
import ticketsReducer from "./tickets";
import commentReducer from "./comments";

export default combineReducers({
  auth: auth,
  events: eventsReducer,
  tickets: ticketsReducer,
  comments: commentReducer
});
