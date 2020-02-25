import { combineReducers } from "redux";
import auth from "./auth";
import eventsReducer from "./events";
import ticketsReducer from "./tickets";

export default combineReducers({
  auth: auth,
  events: eventsReducer,
  tickets: ticketsReducer
});
