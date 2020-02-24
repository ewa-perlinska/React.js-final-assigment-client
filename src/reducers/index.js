import { combineReducers } from "redux";
import auth from "./auth";
import eventsReducer from "./events";

export default combineReducers({ auth: auth, events: eventsReducer });
